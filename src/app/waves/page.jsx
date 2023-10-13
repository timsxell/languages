import styles from './styles.module.css'
import Review from '../components/Review/Review'

export default function Page({

}) {
    return (
        <main className={styles.main}>
            <Review name={'Iva Gnjatović'} text={'Nastavnica dobro predaje. Časovi nisu dosadni, i'+'\u00A0'+'moje znanje se dosta poboljšalo od kada sam krenula na časove'}/>
            <Review name={'Iva Gnjatović'} text={'Nastavnica dobro predaje, Časovi nisu dosadni, i moje znanje se dosta poboljšalo od kada sam krenula na časove'}/>
            <Review name={'Iva Gnjatović'} text={'Nastavnica dobro predaje, Časovi nisu dosadni, i moje znanje se dosta poboljšalo od kada sam krenula na časove'}/>
            <Review name={'Iva Gnjatović'} text={'Nastavnica dobro predaje, Časovi nisu dosadni, i moje znanje se dosta poboljšalo od kada sam krenula na časove'}/>
        </main>
    )

}

