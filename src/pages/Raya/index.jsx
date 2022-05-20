import { Header } from '../../components/Header'
import { MoviePainel } from '../../components/MoviePainel'
import styles from './styles.module.scss'


export function RayaPage() {
    return (
        <div className={styles.imageContainer}>
        <Header/>
        <div className="containerBox">
        <section className={styles.movieBox}>
            <div className={styles.rating}>
                <img src="./imdb.svg" alt="IMDB Rating" />
                <span> 9.3 </span>
            </div>

            <span> 2021 - Kids - Movie </span>

            <img className={styles.logo} src="./raya-logo.png" alt="Logo do Filme" />

            <p className={styles.synopsis}>
            In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.
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