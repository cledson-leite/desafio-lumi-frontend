'use client'

import { useFile } from '@/context/file-context'
import { useRef, useState, useEffect } from 'react'

import style from './upload.module.scss'
import { Buttons } from '../buttons'

export const Upload = () => {
    const {fileSetting} = useFile()
    const [file, setFile] = useState<File>()
    const imageInputRef = useRef<HTMLInputElement>(null)
    let fr: FileReader;
    function handleClick(){
        const current = imageInputRef.current
        if(current) current.click()
        }
    useEffect(()=> {
        fr = new FileReader()
        if (!file) {
            fileSetting('')
            return
        }
        fr.onload = () => {
            fileSetting(fr.result as string)
        }
        fr.readAsDataURL(file)
    }, [file])
    return (
        <div className={style.container}>
            <label
                className={style.label}
                htmlFor='upload'>Enviar Fatura</label>
            <div>                
                <input 
                    className={style.input}                    
                    type="file" 
                    name={'upload'} 
                    id={'upload'} 
                    accept='application/pdf'
                    ref={imageInputRef}
                    onChange={({target}) => setFile(target.files![0])} 
                    required
                />
                <Buttons onClick={handleClick}/>
                
            </div>
            
        </div>
    
    )
}