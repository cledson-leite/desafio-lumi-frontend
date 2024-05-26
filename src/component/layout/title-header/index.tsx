import Link from "next/link"
import './styles.scss'

export const TitleHeader = () => {
    return (
        <Link href={'/'} className="title" >
            <h1>Dashboard</h1>
        </Link>
    )
}