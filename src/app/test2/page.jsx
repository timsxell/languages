'use client'

import styles from './styles.module.css'
import GradientComp from '../components/GradientComp/GradientComp'
import Form from '../components/Form/Form'
import germany from '../../../public/flags/Germany.png'
import england from '../../../public/flags/UnitedKingdom.png'

import ContactSection from '../components/ContactSection/ContactSection'
import Review from '../components/Review/Review'
import Image from 'next/image'

import { Gradient } from '@/app/utils/Gradient'
import React, { useEffect, useRef, useState } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion'




export default function Page({

}) {
    const gradient1 = new Gradient();

    useEffect(() => {
        gradient1.initGradient(`#gradient-canvas3`);
    })

    // const Component = React.forwardRef((props, ref) => (
    //     <Image src={germany} className={styles.flagImage} height={200} ref={ref} />
    // ))

    // const MotionImage = motion(Component)

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance])
    }

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    // const y = useParallax(scrollYProgress, -300);

    const y = useTransform(scrollYProgress, [0, 1], [-300, -2000]);
    const x = useTransform(scrollYProgress, [0, 1], [0, 500]);

    const yE = useTransform(scrollYProgress, [0, 1], [-200, -2000]);
    const xE = useTransform(scrollYProgress, [0, 1], [-700, -1000]);

    // const [scrollY, setScrollY] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollY(window.scrollY);
    //     };

    //     // Attach the scroll event listener when the component mounts
    //     window.addEventListener('scroll', handleScroll);

    //     // Remove the listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <main className={styles.page} ref={ref}>

            <canvas className={styles.canvasBg} id="gradient-canvas3" data-transition-in />

            <div className={styles.intro}>
                <p>Zdravo, ja sam Milana!</p>
                <p>Studiram na Filološkom fakultetu univerziteta u Beogradu</p>
                <p>Poznajem, prevodim i predajem:</p>
            </div>


            <section className={styles.languages} >
                
                <GradientComp colors='germany' n={1} text={"nemački"} img={germany} />
                <div>
                    <motion.div style={{ y, x, position:'absolute', zIndex: -1 }}>
                        <Image src={germany} className={styles.flagImage} width={600} />
                    </motion.div>
                </div>

                <GradientComp colors='england' n={2} text={"engleski"} img={england} />
                <div>
                    <motion.div style={{ y: yE, x: xE, position:'absolute', zIndex: -1 }}>
                        <Image src={england} className={styles.flagImage} width={600} />
                    </motion.div>
                </div>
            </section>

            <section className={styles.activities}>
                <div className={styles.activityCard}>
                    {`online\nčasovi`}
                </div>
                <div className={styles.activityCard}>
                    časovi{'\n'}uživo
                </div>
                <div className={styles.activityCard}>
                    pismeni{'\n'}prevodi
                </div>
                <div className={styles.activityCard}>
                    usmeni{'\n'}prevodi
                </div>
            </section>



            <section className={styles.formSection}>
                <Form />
            </section>

            <ContactSection />

            <section className={styles.reviews}>

                <div className={styles.pinWrapSticky}>

                    <div className={styles.pinWrap}>
                        <Review name={'Iva Gnjatović'} text={'Nastavnica dobro predaje. Časovi nisu dosadni, i' + '\u00A0' + 'moje znanje se dosta poboljšalo od kada sam krenula na časove.'} />
                        <Review name={'Anđela Mijatović'} text={'Na časovima svašta radimo, zanimljivo'+ '\u00A0' + 'je i' + '\u00A0' + 'nastavnica super predaje.'} />
                        <Review name={'Matija Sotirov'} text={'Kada smo krenuli raditi sa Milanom, engleski nisam znao uopšte, ali već kroz desetak časova sam mogao razumeti neke tekstove i strane serije.'} />
                        <Review name={'Ivan Stanković'} text={'Bio mi je potreban B1 nivo nemačkog jer sam planirao da upišem fakultet u Nemačkoj, a znanje iz srednje nije bilo dovoljno. Nakon godinu dana rada sa nastavnicom sam uspeo da položim ispit.'} />
                    </div>

                </div>

            </section>

            {/* <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'grey' }}>
                <h1>something</h1>
                <h1>something</h1>
                <h1>something</h1>
                <h1>something</h1>
            </div> */}
        </main>
    )
}

