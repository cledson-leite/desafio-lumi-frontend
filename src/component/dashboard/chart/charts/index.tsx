import { KWHChart } from "../kwh-chart"
import { ValueChart } from "../value-chart"
import style from './chart.module.scss'

export const Charts = () => {
    return (
        <section className={style.container}>
            <KWHChart />
            <ValueChart />
        </section>
    )
}