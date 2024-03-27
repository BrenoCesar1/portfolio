import React, { useState, useEffect } from 'react';
import { CContainer, CRow, CCol } from '@coreui/react';
import fotoSobreMim from 'assets/foto_sobremim.jpg';
import styles from './apresentacaoCard.module.css';

export default function ApresentacaoCard() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const container = document.querySelector(`.${styles.CContainer}`);
            if (container) {
                const containerTop = container.getBoundingClientRect().top;
                const containerBottom = container.getBoundingClientRect().bottom;

                const windowTop = window.innerHeight || document.documentElement.clientHeight;
                const windowBottom = 0;

                if ((containerTop < windowTop) && (containerBottom > windowBottom)) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Verificar visibilidade assim que o componente é montado

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <CContainer className={`${styles.CContainer} ${isVisible ? styles.fadeInActive : ''} ${styles.fadeIn}`}>
                <div className={styles.container}>
                    <h3 className={styles.subtitulo}>
                        Olá, eu sou o Breno Cesar!
                    </h3>

                    <h2 className={styles.subtitulo2}>
                        Desenvolvedor Full Stack
                    </h2>
                    
                    <CRow className="flex-row">
                        <CCol sm="12" md="8">
                            <p className={styles.paragrafo}>
                                Tenho 22 anos, atualmente cursando o terceiro semestre em Análise e Desenvolvimento de Sistemas
                                e sou completamente apaixonado por tecnologia desde sempre.
                            </p>
                            <p className={styles.paragrafo}>
                                Em 2022 tive oportunidade de aprender mais sobre o universo da programação e o amor só aumentou.
                            </p>
                            <p className={styles.paragrafo}>
                                Onde com muita dedicação consegui minha primeira oportunidade 1 ano depois em maio de 2023 onde estou atualmente.
                            </p>
                            <p className={styles.paragrafo}>
                                Trabalho como Desenvolvedor Java na empresa Meta na qual busco evolução constantemente.
                            </p>
                        </CCol>
                        <CCol sm="12" md="4">
                            <div className={styles.cardImg}>
                                <img
                                    src={fotoSobreMim}
                                    alt="Foto do Breno Cesar perfil"
                                    className={styles.fotoSobreMim}
                                />
                            </div>
                        </CCol>
                    </CRow>
                </div>
            </CContainer>
    )
}