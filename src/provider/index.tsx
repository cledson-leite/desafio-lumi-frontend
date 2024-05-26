import { FileProvider } from "@/context/file-context"
import { ReactNode } from "react"

type ProviderProps = {
    children: ReactNode
}

export const Provider = ({children}: ProviderProps) => {
    return (
        <FileProvider>
            {children}
        </FileProvider>
    )
}