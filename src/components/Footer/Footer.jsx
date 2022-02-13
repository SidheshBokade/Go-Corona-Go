import React from 'react'
import styles from './Footer.module.css'
import github from '../../assets/github.png'
import ln from '../../assets/ln.png'
import insta from '../../assets/insta.png'

export default function Footer() {
    return (
        <div className={styles.container}>
            <h1>Created by Avdhesh bokade </h1>
            <div className={styles.icons}>
                <a href="https://github.com/SidheshBokade"><img src={github} alt="github"></img> </a>
                <a href="https://www.linkedin.com/in/avdhesh-bokade-9958151a0/"><img src={ln} alt="linkdin"></img> </a>
                <a href="https://www.instagram.com/avdheshbokade_ssr/"><img src={insta} alt="insta"></img> </a>
            </div>
        </div>
    )
}
