import { useParams, useNavigate } from "react-router-dom"
import { MdArrowBack, MdPlayArrow } from "react-icons/md"
import media from '../data/media.json'
import styles from './MediaDetailPage.module.css'

export const MediaPageDetail = () => {
    const { title } = useParams()
    const navigate = useNavigate()

    const findMedia = media.find(elem => elem.title === decodeURIComponent(title ?? ''))

    if (!findMedia) return <div className={styles.notFound}>Contenu introuvable</div>

    const heroImage = findMedia.thumbnail.trending?.large ?? findMedia.thumbnail.regular.large

    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <img src={heroImage} alt={findMedia.title} className={styles.heroImg} />
                <div className={styles.heroOverlay} />
                <button className={styles.backBtn} onClick={() => navigate(-1)}>
                    <MdArrowBack size={20} />
                    Retour
                </button>
                <button className={styles.playBtn}>
                    <MdPlayArrow size={22} />
                    Regarder
                </button>
                <div className={styles.heroInfo}>
                    <h1 className={styles.heroTitle}>{findMedia.title}</h1>
                    <div className={styles.heroMeta}>
                        <span>{findMedia.year}</span>
                        <span>·</span>
                        <span>{findMedia.category}</span>
                        <span>·</span>
                        <span className={styles.rating}>{findMedia.rating}</span>
                    </div>
                    <p className={styles.description}>{findMedia.description}</p>
                </div>
            </div>
        </div>
    )
}
