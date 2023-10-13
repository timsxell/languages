'use client'

import { Widget } from "@typeform/embed-react";
import styles from './styles.module.css';

export default function Form({
    id = 'cmXxjF27'
}){

    return(
        <section  className={styles.container}>
            <Widget disableScroll id={id} className={styles.form} />
        </section>
    )

}