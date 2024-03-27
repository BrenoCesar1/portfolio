import { CContainer, CRow, CCol } from '@coreui/react';
import PostModelo from 'componentes/PostModelo';
import fotoCapa from 'assets/Título.png';
import Carrossel from 'componentes/Carrossel';
import Habilidades from 'componentes/Habilidades';
import styles from './sobreMim.module.css';
import ApresentacaoCard from 'componentes/ApresentacaoCard';

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim" className={styles.postModelo}>
            <ApresentacaoCard></ApresentacaoCard>
            <CContainer className={styles.Ccontainer}>
                <CRow className="flex-row">
                    <CCol sm="12" md="6"><Habilidades /></CCol>
                    <CCol sm="12" md="6"><Carrossel className={styles.carrossel} /></CCol>
                </CRow>
            </CContainer>
        </PostModelo>
    );
}
