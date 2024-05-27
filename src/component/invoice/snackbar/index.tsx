'use client'

import { usePdf } from '@/context/pdf-context';
import Snackbar from '@mui/material/Snackbar';

export const DownloadSnackBar = () => {
    const {isOpen, openSetting} = usePdf()
    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={() => openSetting(false)}
            message="fatura baixada para pasta download."
        />
    )
}