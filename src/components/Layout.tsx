import { Outlet, useLocation } from "react-router-dom"
import { BottomNavBar } from "./BottomNavBar"
import { TopBar } from "./TopBar"
import styles from "./Layout.module.css"

export const Layout = () => {
    const location = useLocation()

    return (
        <div className={styles.layout}>
            <TopBar />
            <main className={styles.content}>
                <div key={location.pathname} className={styles.page}>
                    <Outlet />
                </div>
            </main>
            <BottomNavBar />
        </div>
    )
}