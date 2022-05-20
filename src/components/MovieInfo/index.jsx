import styles from './styles.module.scss'

export function MovieInfo() {
    return (
        <section className={styles.movieBox}>
            <div className={styles.rating}>
                <img src="./imdb.svg" alt="IMDB Rating" />
                <span> 8.8 </span>
            </div>

            <span> 2021 - Kids - Movie </span>

            <img className={styles.logo} src="./luca.png" alt="Logo do Filme" />

            <p className={styles.synopsis}>
                Luca and Alberto dream of a life of freedom, a life of adventure — and, most of all, a life with a Vespa to ride.
            </p>

            <button type="button">
                <img src="./play-icon.svg" alt="Play Icon" />
                <span> Watch Now </span>
            </button>

        </section>
    )
} 