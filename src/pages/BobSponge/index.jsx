import { Header } from '../../components/Header'
import { MoviePainel } from '../../components/MoviePainel'


export function BobSpongePage() {
    return (
        <>
        <Header/>
        <section className={styles.movieBox}>
            <div className={styles.rating}>
                <img src="./imdb.svg" alt="IMDB Rating" />
                <span> 8.5 </span>
            </div>

            <span> 2021 - Kids - Movie </span>

            <img className={styles.logo} src="./bob.png" alt="Logo do Filme" />

            <p className={styles.sinopsis}>
                Lorem Ipsum
            </p>

            <button type="button">
                <img src="./play-icon.svg" alt="Play Icon" />
                <span> Watch Now </span>
            </button>

        </section>
        <MoviePainel/>
        </>
    )
}