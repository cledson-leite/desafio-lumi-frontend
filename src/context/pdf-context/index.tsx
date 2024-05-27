'use client'

import { api } from "@/config/api";
import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";


type DownLoadProps = {
    client: string, 
    year: string, 
    month: string
}

type ContextProps = {
    upload: (file: File) => void,
    download: (params: DownLoadProps) => void,
    openSetting: (isOpen: boolean) => void,
    isOpen: boolean
}

const PdfContext = createContext<ContextProps>({
    upload: () => {},
    download: () => {},
    openSetting: () => {},
    isOpen: false
})

type ProviderProps = {
    children: ReactNode
}


export const PdfProvider = ({children}: ProviderProps) => {
    const [file, setFile] = useState<File>()
    const [params, setParams] = useState<DownLoadProps>()
    const [isOpen, setOpen] = useState<boolean>(false)

    const upload = (file: File) => {
        setFile(file)
    }

    const download = (params: DownLoadProps) => {
        setParams(params)
    }
    const fetchUpload = useCallback(async () => {
        setOpen(false)
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const urlUpload = '/file'
        const urlDownload = 
        `/file/${params?.client}/${params?.year}/${params?.month}`

        if(file) {
            try{
                await api.post(urlUpload, {invoice:file}, config)
            }catch (error) {
                throw error
            }
            
        }
        
        if(params){ 
            try {
                await api.get(urlDownload)
                setOpen(true)

            } catch (error) {
                throw error
            }
            
        }

    }, [file, params] )

    useEffect(() => {
        fetchUpload()
    }, [file, params])

    return (
            <PdfContext.Provider value={{upload, download, isOpen, openSetting: setOpen}}>
                {children}
            </PdfContext.Provider>
        )

}

export const usePdf = () => useContext(PdfContext)