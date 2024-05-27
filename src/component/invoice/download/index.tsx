'use client'

import { usePdf } from '@/context/pdf-context'
import style from './download.module.scss'
import { useState } from 'react'
import { DownloadSelect } from '../download-select'


const clientOptions = ['7005400387', '7202788969']
const yearOptions = ['2023']
const monthOptions = [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ'
]

export const Download = () => {
    const [client, setClient] = useState('')
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')
    const {download} = usePdf()
    return (
        <div className={style.container}>
            <h3 className={style.title}>
                Baixar Fatura
            </h3>
            <div className={style.selects}>
                <div className={style.section}>
                    <DownloadSelect
                        helper='Selecione o cliente'
                        onChange={setClient}
                        options={clientOptions}
                        />
                    <DownloadSelect
                        helper='Selecione o ano'
                        onChange={setYear}
                        options={yearOptions}
                        />
                    <DownloadSelect
                        helper='Selecione o mês'
                        onChange={setMonth}
                        options={monthOptions}
                        />
                </div>
                <button 
                    className={style.button}
                    type='button'
                    onClick={() => download({client, year, month})}              
                >
                    Baixar
                </button>
            </div>
        </div>
    )
}