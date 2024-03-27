import React, { useState, useEffect } from 'react';
import { CRow, CCol } from '@coreui/react';
import styles from './habilidades.module.css';
import Icons from './icons';

export default function Habilidades() {
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
        <div className={`${styles.container} ${isVisible ? styles.slideIn : ''}`}>
            <h2>Habilidades</h2>
            <div>
                <CRow className={styles.CRowColumns} xs={{cols: 5}}>
                    <CCol>
                        <div className={styles.box} key="0">
                            <p>CSS3</p>
                            <Icons nome="css"/>
                        </div>
                    </CCol>
                    <CCol>
                        <div className={styles.box} key="1">
                            <p>HTML5</p>
                            <Icons nome="html"/>
                        </div>
                    </CCol>
                    <CCol>
                        <div className={styles.box} key="2">
                            <p>JavaScript</p>
                            <Icons nome="javascript"/>
                        </div>
                    </CCol>
                    <CCol>
                        <div className={styles.box} key="3">
                            <p>React.js</p>
                            <Icons nome="react"/>
                        </div>
                    </CCol>
                    <CCol>
                        <div className={styles.box} key="4">
                            <p>Material UI</p>
                            <Icons nome="materialui"/>
                        </div>
                    </CCol>
                </CRow>
                <CRow xs={{cols: 5}}>
                    <CCol>
                        <div className={styles.box} key="5">
                            <p>CoreUI</p>
                            <Icons nome="CoreUI"/>
                        </div>
                    </CCol>
                    <CCol>
                        <div className={styles.box} key="6">
                            <p>Java</p>
                            <Icons nome="java"/>
                        </div>
                    </CCol>
                    <CCol>
                        <div className={styles.box} key="7">
                            <p>Spring Boot</p>
                            <Icons nome="spring boot"/>
                        </div>
                    </CCol>
                    <CCol>
                        <div className={styles.box} key="8">
                            <p>SQL</p>
                            <Icons nome="sql"/>
                        </div>
                    </CCol>
                    <CCol>
                        <div className={styles.box} key="9">
                            <p>Azure</p>
                            <Icons nome="azure"/>
                        </div>
                    </CCol>
                </CRow>
            </div>
        </div>
    );
}
