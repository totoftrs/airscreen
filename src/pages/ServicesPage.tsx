import { useState } from "react"
import { MdWifi, MdShoppingBag, MdFavorite, MdSecurity } from "react-icons/md"
import type { IconType } from "react-icons"
import services from "../data/services.json"
import styles from './ServicesPage.module.css'

const filters = [
    { label: 'Repas', value: 'meals' },
    { label: 'Boissons', value: 'drinks' },
    { label: 'À bord', value: 'info' },
]

const iconMap: Record<string, IconType> = {
    wifi: MdWifi,
    'shopping-bag': MdShoppingBag,
    heart: MdFavorite,
    shield: MdSecurity,
}

export const ServicesPage = () => {
    const [activeFilter, setActiveFilter] = useState('meals')

    return (
        <div className={styles.page}>
            <aside className={styles.sidebar}>
                {filters.map(f => (
                    <button
                        key={f.value}
                        onClick={() => setActiveFilter(f.value)}
                        className={`${styles.filterBtn} ${activeFilter === f.value ? styles.filterBtnActive : ''}`}
                    >
                        {f.label}
                    </button>
                ))}
            </aside>

            <main className={styles.content}>

                {activeFilter === 'meals' && services.meals.map(item => (
                    <div key={item.id} className={styles.mealCard}>
                        <div className={styles.mealHeader}>
                            <span className={styles.mealName}>{item.name}</span>
                            <span className={styles.mealCategory}>{item.category}</span>
                        </div>
                        <p className={styles.mealDescription}>{item.description}</p>
                        <div className={styles.mealTags}>
                            {item.tags.map(tag => (
                                <span key={tag} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}

                {activeFilter === 'drinks' && services.drinks.map(item => (
                    <div key={item.id} className={styles.drinkItem}>
                        <div>
                            <div className={styles.drinkName}>{item.name}</div>
                            <div className={styles.drinkCategory}>{item.category}</div>
                        </div>
                        <div className={styles.drinkOptions}>
                            {item.options.map(option => (
                                <span key={option} className={styles.option}>{option}</span>
                            ))}
                        </div>
                    </div>
                ))}

                {activeFilter === 'info' && services.info.map(item => {
                    const Icon = iconMap[item.icon]
                    return (
                        <div key={item.id} className={styles.infoCard}>
                            {Icon && <Icon size={24} className={styles.infoIcon} />}
                            <div>
                                <div className={styles.infoTitle}>{item.title}</div>
                                <p className={styles.infoDescription}>{item.description}</p>
                            </div>
                        </div>
                    )
                })}

            </main>
        </div>
    )
}
