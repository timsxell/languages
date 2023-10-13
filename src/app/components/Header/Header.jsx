import styles from './styles.module.css'
import Link from 'next/link'

export default function Header({

}) {

    return (
        <header className={styles.header}>
            <h1 className={styles.name}>Milana Omorac</h1>
            <Link href='#contacts' className={styles.contact}>kontakt</Link>

        </header>
    )
}


