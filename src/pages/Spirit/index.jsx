import { Header } from '../../components/Header'
import { MoviePainel } from '../../components/MoviePainel'
import styles from '../../components/MovieInfo/styles.module.scss'

import spiritBackground from '/spirit-background.jpg'

export function SpiritPage() {
    return (
        <div className={styles.imageContainer} style={{backgroundImage: `url(${spiritBackground})`}}>
        <Header/>
        <div className="containerBox">
        <section className={styles.movieBox}>
            <div className={styles.rating}>
                <img src="./imdb.svg" alt="IMDB Rating" />
                <span> 10 </span>
            </div>

            <span> 2021 - Kids - Movie </span>

            <img className={styles.logo} style={{marginLeft: '-10px', marginBottom: '16px', marginTop: '16px' }} src="./spirit-logo.png" alt="Logo do Filme" />

            <p className={styles.synopsis}>
            After moving to a sleepy little town, young Lucky Prescott befriends a wild mustang named Spirit, who shares her rebellious spirit.
            </p>

            <button type="button">
                <img src="./play-icon.svg" alt="Play Icon" />
                <span> Watch Now </span>
            </button>

        </section>
        <MoviePainel/>
        </div>
        </div>
    )
}