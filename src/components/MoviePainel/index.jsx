import styles from './styles.module.scss'

export function MoviePainel() {

    return (
        <section className={styles.sectionMoviePainel}>
            <span> Movies </span>
            
            <div className={styles.movieGrid}>
                <div>
                    <img src="./play.svg" alt="" />
                    <span className={styles.categories}> Kids </span>
                    <span className={styles.movie}> Spirit Untamed </span>   
                  
                </div>
                <div>
                <img src="./play.svg" alt="" />
                    <span className={styles.categories}> Kids </span>
                    <span className={styles.movie}> Wish Dragon </span>   
                </div>
                <div>
                <img src="./play.svg" alt="" />
                    <span className={styles.categories}> Kids </span>
                    <span className={styles.movie}> Raya and the Last Dragon </span>   
                </div>
                <div>
                <img src="./play.svg" alt="" />
                    <span className={styles.categories}> Kids </span>
                    <span className={styles.movie}> Sponge on the Run </span>   
                </div>
            </div>
        </section>

    )
} 