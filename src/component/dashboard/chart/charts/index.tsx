import { Suspense } from "react"
import { KWHChart } from "../kwh-chart"
import { ValueChart } from "../value-chart"
import style from './chart.module.scss'
import { Loading } from "../../loading"

export const Charts = () => {
    return (
        <section className={style.container}>
            <Suspense fallback={<Loading />}>
                <KWHChart />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <ValueChart />
            </Suspense>
        </section>
    )
}