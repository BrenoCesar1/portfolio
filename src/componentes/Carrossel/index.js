import React, { useState, useEffect } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import styles from "./carrossel.module.css";
import certificado1 from "assets/certificados/certificado-1.jpg";
import certificado2 from "assets/certificados/certificado-2.jpg";
import certificado3 from "assets/certificados/certificado-3.jpg";

export default function Carrossel() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector(`.${styles.container}`);
            if (element) {
                const top = element.getBoundingClientRect().top;
                const bottom = element.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                
                setIsVisible(top < windowHeight && bottom >= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.container} ${isVisible ? styles.fadeIn : ''}`}>
            <CCarousel wrap controls indicators dark interval={4000} className={styles.carrossel}>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={certificado1} alt="certificado 1" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={certificado2} alt="certificado 2" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={certificado3} alt="certificado 3" />
                </CCarouselItem>
            </CCarousel>
        </div>
    );
}
