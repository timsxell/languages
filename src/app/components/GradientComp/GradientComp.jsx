'use client'

import styles from './styles.module.css'
import { Gradient } from '@/app/utils/Gradient'
import React, { useEffect } from 'react';
import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';


export default function GradientComp({
    colors = 'germany',
    n = 1,
    img,
    text,
}) {

    const id = `gradient-canvas${n}`

    const gradient = new Gradient();

    useEffect(() => {
        gradient.initGradient(`#${id}`);
    })

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", '0.9 1']
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    const translateXProgress = useTransform(scrollYProgress, [0, 1], ['-80%', '50%'])


    const Component = React.forwardRef((props, ref) => (
        <Image src={img} className={styles.image} height={200} ref={ref} />
    ))

    Component.displayName='MotionImageComponent'

    const MotionImage = motion(Component)

    function useParallax(value, distance){
        return useTransform(value, [0, 1], [-distance, distance])
    }

    // const ref = useRef(null);
    // const {scrollYProgress} = useScroll({target: ref});
    const y = useParallax(scrollYProgress, 300);




    return (
        // <div className={styles.container} ref={ref}>

        //     <canvas className={`${styles.gradientCanvas} ${colors}`} id={id} data-transition-in />
        //     <div>
        //     <MotionImage
        //         style={{
        //             x: translateXProgress,
        //         }}
        //         viewport={{root: ref}}
        //     />
        //     </div>

        //         <div>
        //     <motion.h4 className={styles.text}
        //         style={{
        //             scale: scaleProgress,
        //             opacity: opacityProgress,
        //         }}
        //         viewport={{root: ref}}
        //     >{text}</motion.h4>
        //     </div>
        // </div>

        <div className={styles.container} ref={ref}>

            {/* <MotionImage style={{y}} /> */}

            {/* <div>
                <MotionImage
                    style={{
                        x: translateXProgress,
                    }}
                    viewport={{ root: ref }}
                />
            </div> */}

            <div className={styles.gradientCont}>
                <canvas className={`${styles.gradientCanvas} ${colors}`} id={id} data-transition-in />
                <motion.h4 className={styles.text}
                    style={{
                        scale: scaleProgress,
                        opacity: opacityProgress,
                    }}
                    viewport={{ root: ref }}
                >{text}</motion.h4>
            </div>
        </div>
    )
}

//<canvas id="gradient-canvas" data-transition-in />