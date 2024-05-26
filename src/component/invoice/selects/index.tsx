import { DownloadSelect } from '@/component/invoice/download-select'
import style from './selects.module.scss'

export const Selects = () => {
    return (
        <section className={style.container}>
            <DownloadSelect helper='Selecione o cliente'/>
            <DownloadSelect helper='Selecione o ano' />
            <DownloadSelect helper='Selecione o mês' />
        </section>
    )
}