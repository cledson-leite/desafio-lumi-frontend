import { Company } from "../company"
import { TitleHeader } from "../title-header"

import './styles.scss'

export const Header = () => {
    return (
        <header>
            <TitleHeader />
            <Company />
        </header>
    )
}