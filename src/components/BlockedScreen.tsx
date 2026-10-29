import { MdFlight } from 'react-icons/md'
import flightData from '../data/flight.json'
import styles from './BlockedScreen.module.css'

type Props = {
    message: string
}

export const BlockedScreen = ({ message }: Props) => {
    const { progress, departure, arrival, remainingTime, flightNumber } = flightData

    return (
        <div className={styles.overlay}>
            <div className={styles.logo}>AirScreen</div>

            <div className={styles.route}>
                {departure.code} → {arrival.code} · Vol {flightNumber}
            </div>

            <div className={styles.progressWrapper}>
                <div className={styles.track}>
                    <div className={styles.fill} style={{ width: `${progress}%` }} />
                    <div className={styles.plane} style={{ left: `${progress}%` }}>
                        <MdFlight size={20} />
                    </div>
                </div>
                <div className={styles.labels}>
                    <span>{departure.city}</span>
                    <span>{remainingTime} restant</span>
                    <span>{arrival.city}</span>
                </div>
            </div>

            <p className={styles.message}>{message}</p>
        </div>
    )
}
