import { useState } from 'react'
import { MdFlight } from 'react-icons/md'
import flightData from '../data/flight.json'
import styles from './FlightBanner.module.css'

export const FlightBanner = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { progress, remainingTime, departure, arrival, flightNumber, altitude, speed, remainingDistance, weather } = flightData

    return (
        <div className={styles.banner}>
            <div className={styles.summary}>
                <div className={styles.route}>
                    {departure.code} → {arrival.code} · {remainingTime}
                </div>
                <div className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "Moins d'infos" : "Plus d'infos"}
                </div>
            </div>

            {isOpen && (
                <>
                    {/* Barre de progression */}
                    <div className={styles.progressWrapper}>
                        <div className={styles.progressTrack}>
                            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                            <div className={styles.progressPlane} style={{ left: `${progress}%` }}>
                                <MdFlight size={16} />
                            </div>
                        </div>
                        <div className={styles.progressLabels}>
                            <span>{departure.code}</span>
                            <span>{progress}%</span>
                            <span>{arrival.code}</span>
                        </div>
                    </div>

                    {/* Détails */}
                    <div className={styles.details}>
                        <div><span>Vol</span>{flightNumber}</div>
                        <div><span>Altitude</span>{altitude} m</div>
                        <div><span>Vitesse</span>{speed} km/h</div>
                        <div><span>Distance restante</span>{remainingDistance}</div>
                        <div><span>Température</span>{weather.temperature}°C</div>
                        <div><span>Destination</span>{arrival.airport}</div>
                        <div><span>Heure d'arrivée</span>{arrival.time}</div>
                    </div>
                </>
            )}
        </div>
    )
}
