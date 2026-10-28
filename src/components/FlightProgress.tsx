import { MdFlight } from "react-icons/md"
import flightData from "../data/flight.json"
import styles from "./FlightProgress.module.css"

export const FlightProgress = () => {
    const { progress, remainingTime, departure, arrival } = flightData

    return (
        <div className={styles.wrapper}>
            <div className={styles.airports}>
                <span className={styles.code}>{departure.code}</span>
                <span className={styles.code}>{arrival.code}</span>
            </div>
            <div className={styles.track}>
                <div className={styles.fill} style={{ width: `${progress}%` }} />
                <div className={styles.plane} style={{ left: `${progress}%` }}>
                    <MdFlight size={20} />
                </div>
            </div>
            <div className={styles.remaining}>
                {remainingTime} restant
            </div>
        </div>
    )
}
