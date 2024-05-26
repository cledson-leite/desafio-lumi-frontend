import { MainSelect } from '../main-select'
import './styles.scss'

export const Selects = () => {
    return (
        <section className='select-container '>
            <MainSelect helper='Selecione o cliente'/>
            <MainSelect helper='Selecione o ano' />
        </section>
    )
}