'use client'

import { ReactNode, createContext, useContext, useState } from "react"

type ContextProps = {
    file: string,
    fileSetting: (file: string) => void
}

const FileContext = createContext<ContextProps>({
    file: '', fileSetting: () => {}
})

type FileProviderProps = {
    children: ReactNode
}

export const FileProvider = ({children}: FileProviderProps) => {
    const [file, setFile] = useState('')
    const fileSetting = (file: string) => {
        setFile(file)
    }
    return (
        <FileContext.Provider value={{file, fileSetting}}>
            {children}
        </FileContext.Provider>
    )
}

export const useFile = () => useContext(FileContext)