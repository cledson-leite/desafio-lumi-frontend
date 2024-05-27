'use client'

import { useFile } from '@/context/file-context'
import style from './buttons.module.scss'
import { usePdf } from '@/context/pdf-context'

type ButtonsProps = {
    onClick: () => void
    pdf: File
}

export const Buttons = ({onClick, pdf}: ButtonsProps) => {
    const {upload} = usePdf()

    const {file, fileSetting} = useFile()

    const handleClick = () => {
        upload(pdf)
        fileSetting('')
    }
    return (
        <div>
            {
                !file 
                ? (
                    <button 
                        className={style.dafault}
                        type='button'
                        onClick={onClick}                
                    >
                        Escolher Fatura
                    </button>
                ) : (
                    <div  className={style.container}>
                        <button 
                            className={style.success}
                            type='button'
                            onClick={handleClick}                
                        >
                            enviar
                        </button>
                        
                        <button 
                            className={style.failure}
                            type='button'
                            onClick={() => fileSetting('')}                
                        >
                            cancelar
                        </button>
                    </div>
                )
            }
        </div>
    )
}