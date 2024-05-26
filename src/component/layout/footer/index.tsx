import { FaHeart } from "react-icons/fa6";
import style from './footer.module.scss'

export const Footer = () => {
    return (
        <footer className={style.container}>
            <h3>Desenvolvido por:</h3>
            <span><FaHeart color="red" size={30}/></span>
            <h1>Cledson Leite</h1>
        </footer>
    )
}