import { FileProvider } from "@/context/file-context"
import { ListProvider } from "@/context/list-invoice-context"
import { PdfProvider } from "@/context/pdf-context"
import { ReactNode } from "react"

type ProviderProps = {
    children: ReactNode
}

export const Provider = ({children}: ProviderProps) => {
    return (
        <ListProvider>
            <FileProvider>
                <PdfProvider>
                    {children}
                </PdfProvider>
            </FileProvider>
        </ListProvider>
    )
}