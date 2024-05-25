import { FaHeart } from "react-icons/fa6";
import './styles.scss'

export const Footer = () => {
    return (
        <footer>
            <h3>Desenvolvido por:</h3>
            <span><FaHeart color="red" size={30}/></span>
            <h1>Cledson Leite</h1>
        </footer>
    )
}