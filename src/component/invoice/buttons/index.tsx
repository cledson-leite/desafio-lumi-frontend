'use client'

import { useFile } from '@/context/file-context'
import style from './buttons.module.scss'

type ButtonsProps = {
    onClick: () => void
}

export const Buttons = ({onClick}: ButtonsProps) => {
    const {file, fileSetting} = useFile()
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
                            // onClick={handleClick}                
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