'use client'

import { useFile } from "@/context/file-context"

import style from './image-picker.module.scss'

export const ImagePicker = () => {
    const {file} = useFile()
    return (
        <div >
            {!file && <p className={style.message}>Sem fatura selecionada</p> }
            { file && (
                <object
                    className={style.file}
                    data={file} 
                    type="application/pdf"
                />
                
            )}
        </div>
)
}