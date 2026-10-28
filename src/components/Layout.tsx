import { Outlet } from "react-router-dom"
import { BottomNavBar } from "./BottomNavBar"
import { TopBar } from "./TopBar"
import styles from "./Layout.module.css"

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <TopBar />
            <main className={styles.content}>
                <Outlet />
            </main>
            <BottomNavBar />
        </div>
    )
}