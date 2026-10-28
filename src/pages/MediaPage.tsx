import { useState } from 'react'
import media from '../data/media.json'
import { Card } from '../components/Card'
import styles from './MediaPage.module.css'

const filters = [
    { label: 'Tous', value: 'Tous' },
    { label: 'Films', value: 'Movie' },
    { label: 'Séries', value: 'TV Series' },
]

export const MediaPage = () => {
    const [activeFilter, setActiveFilter] = useState('Tous')

    const trendingMedia = media.filter(elem => elem.isTrending)

    const filteredMedia = activeFilter === 'Tous'
        ? media
        : media.filter(elem => elem.category === activeFilter)

    return (
        <div className={styles.page}>
            <aside className={styles.sidebar}>
                {filters.map(f => (
                    <button
                        key={f.value}
                        className={`${styles.filterBtn} ${activeFilter === f.value ? styles.filterBtnActive : ''}`}
                        onClick={() => setActiveFilter(f.value)}
                    >
                        {f.label}
                    </button>
                ))}
            </aside>

            <main className={styles.content}>
                <section>
                    <div className={styles.sectionTitle}>En ce moment</div>
                    <div className={styles.carousel}>
                        {trendingMedia.map(elem => (
                            <Card key={elem.title} {...elem} />
                        ))}
                    </div>
                </section>

                <section>
                    <div className={styles.sectionTitle}>Catalogue</div>
                    <div className={styles.grid}>
                        {filteredMedia.map(elem => (
                            <Card key={elem.title} {...elem} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}
