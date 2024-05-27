import { FileProvider } from "@/context/file-context"
import { ListProvider } from "@/context/list-invoice-context"
import { ReactNode } from "react"

type ProviderProps = {
    children: ReactNode
}

export const Provider = ({children}: ProviderProps) => {
    return (
        <ListProvider>
            <FileProvider>
                {children}
            </FileProvider>
        </ListProvider>
    )
}