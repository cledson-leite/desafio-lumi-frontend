import { TitleHeader } from "../title-header"
import { LayoutButton } from '../layout-button';

import style from './header.module.scss'

export const Header = () => {
    return (
        <header className={style.container}>
            <TitleHeader />
            <LayoutButton />
        </header>
    )
}