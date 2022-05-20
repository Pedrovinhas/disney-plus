import styles from './styles.module.scss'
import { Link } from "react-router-dom";

export function MoviePainel() {

    return (
        <section className={styles.sectionMoviePainel}>
            <span> Movies </span>

            <div className={styles.movieGrid}>

                <div>
                <Link to="/" className={styles.link}>

                    <img src="./play.svg" alt="" />
                    <span className={styles.categories}> Kids </span>
                    <span className={styles.movie}> Luca </span>

                </Link>
                </div>

                <div>
                <Link to="/spirit" className={styles.link}>

                    <img src="./play.svg" alt="" />
                    <span className={styles.categories}> Kids </span>
                    <span className={styles.movie}> Spirit Untamed </span>

                </Link>
                </div>

                <div>
                <Link to="/raya">

                    <img src="./play.svg" alt="" />
                    <span className={styles.categories}> Kids </span>
                    <span className={styles.movie}> Wish Dragon </span>

                </Link>
                </div>


                <div>
                <Link to="/wish-dragon">

                    <img src="./play.svg" alt="" />
                    <span className={styles.categories}> Kids </span>
                    <span className={styles.movie}> Raya and the Last Dragon </span>

                </Link>
                </div>

                <div>
                <Link to="/bob-sponge">

                    <img src="./play.svg" alt="" />
                    <span className={styles.categories}> Kids </span>
                    <span className={styles.movie}> Sponge on the Run </span>

                </Link>
                </div>
            </div>
        </section>

    )
} 