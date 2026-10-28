import { NavLink } from "react-router-dom"
import type { IconType } from "react-icons"
import { MdFlight, MdVideoLibrary, MdHeadphones, MdRoomService } from "react-icons/md"
import styles from "./BottomNavBar.module.css"

type NavItem = {
    label: string
    icon: IconType
    url: string
}

const items: NavItem[] = [
    { label: 'Accueil', icon: MdFlight, url: '/' },
    { label: 'Médias', icon: MdVideoLibrary, url: '/media' },
    { label: 'Musique', icon: MdHeadphones, url: '/music' },
    { label: 'À bord', icon: MdRoomService, url: '/services' },
]

export const BottomNavBar = () => {
    return (
        <nav className={styles.nav}>
            {items.map(item => {
                const Icon = item.icon
                return (
                    <NavLink
                        key={item.label}
                        to={item.url}
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ''}`
                        }
                    >
                        <Icon size={24} />
                        <span>{item.label}</span>
                    </NavLink>
                )
            })}
        </nav>
    )
}
