'use client'

import { api } from "@/config/api";
import { createContext, useCallback, useEffect, useState, ReactNode, useContext } from "react";

type Kwh = {
    month: string,
    consumed: number,
    compensated: number
}

type Value = {
    month: string,
    total: number,
    saved: number
}

type ContextProps = {
    values: Value[],
    kwh: Kwh[]
    listSetting: (client: string, year: string) => void
}

const valuesInitial: Value[] = [{
    month: 'JAN',
    total: 0.0,
    saved: 0.0,
}]

const kwhInitial: Kwh[] = [{
    month: 'JAN',
    consumed: 0,
    compensated: 0,
}]

const ListContext = createContext<ContextProps>({
    kwh: kwhInitial,
    values: valuesInitial,
    listSetting: () => {}
})

type ProviderProps = {
    children: ReactNode
}

export const ListProvider = ({children}: ProviderProps) => {
    const [client, setClient] = useState('')
    const [year, setYear] = useState('')
    const [kwh, setKwh] = useState<Kwh[]>([])
    const [values, setValues] = useState<Value[]>([])
    const listSetting = (client: string, year: string) => {
        setClient(client)
        setYear(year)
    }
    const fetch = useCallback(async () => {
        const url = `/invoice/${client}/${year}`
        if(client && year){
            const response = await api.get(url)

        const kwh: Kwh[] = response.data.map((item: any) => {
            const consumed = item.quantEletric + item.quantSCEEE
            const compensated = item.quantPlywood
            const month = item.monthRef
            return {month, consumed, compensated}
        })

        const values: Value[] = response.data.map((item: any) => {
            const total = (Number(item.valueEletric) + Number(item.valueSCEEE) + Number(item.valuePublic)).toFixed(2)
            const saved = item.valuePlywood ? (Number(item.valuePlywood).toFixed(2) as any) * -1 : 0
            const month = item.monthRef
            return {
                month,
                total,
                saved
            }
        })

        setKwh(kwh)
        setValues(values)
        }
        
    }, [client, year])

    useEffect(() => {
        fetch()
    },[fetch])

    return (
        <ListContext.Provider value={{values, kwh, listSetting}}>
            {children}
        </ListContext.Provider>
    )
}

export const useList = () => useContext(ListContext)