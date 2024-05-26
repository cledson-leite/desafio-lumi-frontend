import { Selects } from '../selects'
import style from './download.module.scss'

export const Download = () => {
    return (
        <div className={style.container}>
            <h3 className={style.title}>
                Baixar Fatura
            </h3>
            <div className={style.selects}>
                <Selects />
                <button 
                    className={style.button}
                    type='button'
                    // onClick={onClick}               
                >
                    Baixar
                </button>
            </div>
        </div>
    )
}