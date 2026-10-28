import fond from '../assets/fond.png'
import { FlightBanner } from '../components/FlightBanner'
import styles from './FlightPage.module.css'

export const FlightPage = () => {
  
    return (
        <div className={styles.page}>
            <img src={fond} alt="" className={styles.bg} />
            {/* <div className={styles.overlay} /> */}
            <FlightBanner />
        </div>
    )
}
