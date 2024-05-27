'use client'

import { useList } from '@/context/list-invoice-context'
import { MainSelect } from '../main-select'
import style from './selects.module.scss'
import { useEffect, useState } from 'react'

const clientOptions = ['7005400387', '7202788969']
const yearOptions = ['2023']

export const Selects = () => {
    const [client, setClient] = useState('')
    const [year, setYear] = useState('')

    const {listSetting} = useList()

    useEffect(() => {
        if(client && year){
            listSetting(client, year)
        }
    }, [client, year])

    return (
        <section className={style.container}>
            <MainSelect 
                helper='Selecione o cliente'
                onChange={setClient}
                options={clientOptions}
                />
            <MainSelect 
                helper='Selecione o mês'
                onChange={setYear}
                options={yearOptions}
                />
        </section>
    )
}