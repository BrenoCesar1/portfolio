import React, { useState, useEffect } from 'react';
import styles from './banner.module.css';
import minhaFoto from 'assets/foto_perfil.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import ArchiveIcon from '@mui/icons-material/Archive';
import Curriculo from 'assets/Curriculo.pdf'
import { CButton } from '@coreui/react'

const ParagrafoComDigitação = ({ texto }) => {
    const [textoDigitado, setTextoDigitado] = useState("");
    const tamanhoTexto = texto.length;

    useEffect(() => {
        let intervaloDigitação;

        if (textoDigitado.length < tamanhoTexto) {
            intervaloDigitação = setInterval(() => {
                setTextoDigitado((prevTexto) => prevTexto + texto[prevTexto.length]);
            }, 100); // Intervalo de 100ms entre cada caractere
        } else {
            clearInterval(intervaloDigitação);
        }

        return () => clearInterval(intervaloDigitação);
    }, [textoDigitado, tamanhoTexto]);

    useEffect(() => {
        const reiniciarTexto = () => {
            setTextoDigitado("");
        };

        const intervaloReiniciar = setInterval(reiniciarTexto, 10000); // Reinicia o texto a cada 1 minuto

        return () => clearInterval(intervaloReiniciar);
    }, []);

    return (
        <p>
            {textoDigitado}
            <span className={styles.blinkingCursor}></span>
        </p>
    );
};

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    <ParagrafoComDigitação texto="Olá Mundo!" />
                </h1>
                <p className={styles.paragrafo}>
                    Bem vindo ao meu espaço pessoal!
                </p>
                <p className={styles.segundoParagrafo}>
                    Aqui você encontra um resumo da minha jornada, e alguns projetos pessoais, fique a vontade!
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Breno Cesar"
                />
                <div className={styles.icones}>

                    <div className={styles.backgroundIconLinkedin}>
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/in/breno-cesar01/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon color="primary" />
                        </IconButton>
                    </div>

                    <div className={styles.backgroundIconGit}>
                        <IconButton
                            component="a"
                            href="https://github.com/BrenoCesar1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon sx={{ color: 'black' }} />
                        </IconButton>

                    </div>
                </div>
            </div>

            <div className={styles.botaoContainer}>
                <a
                    href={Curriculo}
                    download="Curriculo Breno Cesar.pdf"
                    className={styles.botaoDownload}
                >
                    <CButton size="lg"className={styles.botaoIcon}>
                        Download CV
                     <ArchiveIcon className={styles.icone} />
                    </CButton>
                </a>
            </div>
        </div>
    );
}
