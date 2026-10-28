import { Link } from "react-router-dom"
import type { Media } from "../types/media"
import styles from "./Card.module.css"

type CardProps = Pick<Media, 'title' | 'thumbnail' | 'year' | 'category'>

export const Card = ({ title, thumbnail, year, category }: CardProps) => {

    return (
        <Link to={`/media/${encodeURIComponent(title)}`} className={styles.card}>
            <img src={thumbnail.regular.small} alt={title} className={styles.thumbnail} />
            <div className={styles.info}>
                <div className={styles.title}>{title}</div>
                <div className={styles.meta}>{year} · {category}</div>
            </div>
        </Link>

    )
}
