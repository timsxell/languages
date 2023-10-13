import styles from './styles.module.css'
import quotes from '../../../../public/quoteDown.svg'
import Image from 'next/image'

export default function Review({
    text,
    name
}){

    return(
        <div className={styles.card}>
            {/* <p className={styles.quotes}>"</p> */}
            <Image src={quotes} width={100} className={styles.quotes}></Image>
            <p className={styles.text}>{text}</p>
            <p className={styles.name}>{name}</p>
        </div>
    )

}