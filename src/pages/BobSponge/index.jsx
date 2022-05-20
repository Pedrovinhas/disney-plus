import { Header } from '../../components/Header'
import { MoviePainel } from '../../components/MoviePainel'
import styles from './styles.module.scss'


export function BobSpongePage() {
    return (
        <div className={styles.imageContainer}>
        <Header/>
        <div className="containerBox">
        <section className={styles.movieBox}>
            <div className={styles.rating}>
                <img src="./imdb.svg" alt="IMDB Rating" />
                <span> 9.5 </span>
            </div>

            <span> 2021 - Kids - Movie </span>

            <img className={styles.logo} src="./sponge-bob-logo.png" alt="Logo do Filme" />

            <p className={styles.synopsis}>
            The misadventures of a talking sea sponge who works at a fast food restaurant, attends a boating school, and lives in an underwater pineapple.
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