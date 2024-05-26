import { Download } from "@/component/invoice/download";
import { ImagePicker } from "@/component/invoice/image-picker";
import { Upload } from "@/component/invoice/upload";

import styles from './invoice-page.module.scss'

export default function InvoicePage() {
    return (
        <main className={styles.container}>
            <div className={styles.header}>
                <Upload />
                <Download />
            </div>
            <ImagePicker />
        </main>
    )
}