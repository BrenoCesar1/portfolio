
import React, { useState, useEffect } from 'react';
import { CImage } from '@coreui/react';
import styles from './habilidades.module.css'

const Icons = ({ nome }) => {
    const [icons, setIcons] = useState(null);
  
    useEffect(() => {
      const importIcons = async () => {
        const icone = await import(`assets/habilidades/${nome}.svg`);
        setIcons(icone.default); // Acesse a URL do SVG aqui
      };
  
      importIcons();
    }, [nome]);
  
    return icons && <CImage src={icons} alt={nome} className={styles.CImage} />;
  };
  export default Icons;
  