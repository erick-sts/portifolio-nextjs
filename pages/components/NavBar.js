import styles from '../../styles/NavBar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.perfil}></div>
            <div className={styles.menu}>
                <ul>
                    <li><Link href='/'>Início</Link></li>
                    <li><Link href='/curriculo'>Sobre</Link></li>
                    <li><Link href='/'>Projetos</Link></li>
                </ul>
            </div>
        </div>
    )
}