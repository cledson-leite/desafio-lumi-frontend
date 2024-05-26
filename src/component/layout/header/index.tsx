import { TitleHeader } from "../title-header"
import { LayoutButton } from '../layout-button';

import './styles.scss'

export const Header = () => {
    return (
        <header>
            <TitleHeader />
            <LayoutButton />
        </header>
    )
}