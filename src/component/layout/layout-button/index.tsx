import { FaFileInvoice } from "react-icons/fa6";
import './styles.scss'
import Link from "next/link";

export const LayoutButton = () => {
    return (
        <Link href={'/invoice'} className="button">
            <FaFileInvoice color={'white'} size={25}/>
            Fatura
        </Link>
    )
}