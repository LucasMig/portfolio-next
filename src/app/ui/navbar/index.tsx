import Logo from '@/app/ui/logo'
import Navigation from '@/app/ui/navigation'
import styles from '@/app/ui/navbar/styles.module.scss'

export default function NavBar() {
    return (
        <>
            <header className={styles.navbar}>
                <Logo/>
                <Navigation/>
            </header>
        </>
    )
}