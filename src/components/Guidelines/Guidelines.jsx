import React, { useEffect } from 'react'
import styles from './Guidelines.module.css';
import empty_street from '../../assets/empty.svg';
import hand_wash from '../../assets/hand_wash.svg';
import medicare from '../../assets/medicare.svg';
import social_distance from '../../assets/social_distance.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Guidelines() {

    useEffect(() => {
        AOS.init({
            offset: 120,
            delay: 0,
            duration: 400,
        });
    }, [])
    return (

        <div className={styles.wrapper}  
         data-aos="fade-zoom-in"
                    data-aos-easing="ease-in"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                    data-aos-anchor-placement="top-center">
            <h2 >A few guidelines </h2>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img src={empty_street} alt="empty street"></img>
                    <div className={styles.cardContent}>
                        <h5>Everyone must stay at home and away from other people to stop the spread of coronavirus (COVID-19).</h5>

                    </div>
                </div>

                <div className={styles.card}>
                    <img src={hand_wash} alt="hand wash"></img>
                    <div className={styles.cardContent}>
                        <h5>Regularly and thoroughly clean your hands with an alcoholbased hand rub or wash them with soap and water.
                        Why? Washing your hands with soap and water or using
alcohol-based hand rub kills viruses that may be on your hands. </h5>

                    </div>
                </div>

                <div className={styles.card}>
                    <img src={medicare} alt="medicare"></img>
                    <div className={styles.cardContent}>
                        <h5>Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.</h5>

                    </div>
                </div>

                <div className={styles.card}>
                    <img src={social_distance} alt="social distance"></img>
                    <div className={styles.cardContent}>
                        <h5>Maintain at least 1 metre (3 feet) distance between yourself and
                        anyone who is coughing or sneezing.
                        Why? When someone coughs or sneezes they spray small liquid
                        droplets from their nose or mouth which may contain virus. If you
                        are too close, you can breathe in the droplets, including the
COVID-19 virus if the person coughing has the disease. </h5>

                    </div>
                </div>
            </div>

        </div>
    )
}
