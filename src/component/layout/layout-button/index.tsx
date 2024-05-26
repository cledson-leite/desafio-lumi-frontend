import { FaFileInvoice } from "react-icons/fa6";
import Link from "next/link";
import style from './layout-button.module.scss'

export const LayoutButton = () => {
    return (
        <Link href={'/invoice'} className={style.button}>
            <FaFileInvoice color={'white'} size={25}/>
            Fatura
        </Link>
    )
}