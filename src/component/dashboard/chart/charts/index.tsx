import { KWHChart } from "../kwh-chart"
import { ValueChart } from "../value-chart"
import './styles.scss'

export const Charts = () => {
    return (
        <section className="container">
            <KWHChart />
            <ValueChart />
        </section>
    )
}