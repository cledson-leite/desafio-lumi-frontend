import Link from "next/link"
import style from './title-header.module.scss'

export const TitleHeader = () => {
    return (
        <Link href={'/'} className={style.title} >
            <h1>Dashboard</h1>
        </Link>
    )
}