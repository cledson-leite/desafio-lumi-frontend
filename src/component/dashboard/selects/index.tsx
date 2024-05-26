import { MainSelect } from '../main-select'
import style from './selects.module.scss'

export const Selects = () => {
    return (
        <section className={style.container}>
            <MainSelect helper='Selecione o cliente'/>
            <MainSelect helper='Selecione o ano' />
        </section>
    )
}