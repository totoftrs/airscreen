import { MdBrightness6, MdVolumeUp, MdSettings, MdFlight } from 'react-icons/md'
import { useLocation } from 'react-router-dom'
import type { IconType } from 'react-icons'
import flightData from '../data/flight.json'
import styles from './TopBar.module.css'

type ParamIcon = {
    label: string
    icon: IconType
}

const paramsIcon: ParamIcon[] = [
    { label: 'Volume', icon: MdVolumeUp },
    { label: 'Lumière', icon: MdBrightness6 },
    { label: 'Paramètres', icon: MdSettings },
]

export const TopBar = () => {
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    return (
        <div className={styles.topBar}>
            <div className={styles.logo}>AirScreen</div>

            {!isHomePage && (
                <div className={styles.flightInfo}>
                    <MdFlight size={16} />
                    <span>{flightData.departure.code} → {flightData.arrival.code}</span>
                    <span className={styles.separator}>·</span>
                    <span>{flightData.remainingTime} restant</span>
                </div>
            )}

            <div className={styles.icons}>
                {paramsIcon.map(item => {
                    const Icon = item.icon
                    return (
                        <button key={item.label} className={styles.iconBtn} aria-label={item.label}>
                            <Icon size={22} />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
