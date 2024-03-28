import { Link as MuiLink } from '@mui/material'
import styles from './post.module.css'

export default function PostCard({ post }){
    return (
        <MuiLink href={`/posts/${post.id}`} underline="none">
            <div className={styles.post}>
                <img className={styles.capa} 
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <h2 className={styles.descricao}>{post.texto}</h2>
                <button className={styles.botaoLer}>Conhecer</button>
            </div>
        </MuiLink>
    )
}