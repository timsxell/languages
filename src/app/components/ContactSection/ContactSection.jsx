'use client'

import styles from './styles.module.css'
import links, { phoneNumber, mail } from '../../../contacts'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect } from 'react'

import whatsapp from '../../../../public/qr/whatsapp_qr.svg'
import contact from '../../../../public/qr/contact_qr.svg'
import instagram from '../../../../public/qr/instagram_qr.svg'



export default function ContactSection({

}) {


    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", '0.7 1']
    });

    const translateX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 10,
        restDelta: 0.001
    })

    const translateRight = useTransform(translateX, [0, 1], ['-100%', '0%'])
    const translateLeft = useTransform(translateX, [0, 1], ['100%', '0%'])

    return (
        <section className={styles.section} ref={ref} id="contacts">

            <div className={styles.top}>

                <div>
                <motion.div
                    viewport={{ root: ref }}
                    style={{
                        x: translateLeft
                    }}>
                    <a className={styles.card} target='_blank' href={links.whatsapp}>
                        <Image className={styles.qr} src={whatsapp} />
                        whatsapp
                    </a>
                </motion.div>
</div>
                <div>
                    <a className={styles.card} href={links.mobile}>
                        <Image className={styles.qr} src={contact} />
                        +{phoneNumber}
                    </a>
                </div>
<div>
                <motion.div
                    viewport={{ root: ref }}
                    style={{
                        x: translateRight
                    }}>
                    <a className={styles.card} target='_blank' href={links.insta}>
                        <Image className={styles.qr} src={instagram} />
                        instagram
                    </a>
                </motion.div>
</div>
            </div>
            <div className={styles.bottom}>
                <a className={styles.mail} target='_blank' href={links.mail}>
                    {mail}
                </a>
            </div>
        </section>
    )
}