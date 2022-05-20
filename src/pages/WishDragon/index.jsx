import { Header } from '../../components/Header'
import { MoviePainel } from '../../components/MoviePainel'
import styles from '../../components/MovieInfo/styles.module.scss'

import wishDragonBackground from '/wish-dragon-background.jpg'


export function WishDragonPage() {
    return (
        <div className={styles.imageContainer} style={{backgroundImage: `url(${wishDragonBackground})`}}>
        <Header/>
        <div className="containerBox" >
        <section className={styles.movieBox}>
            <div className={styles.rating}>
                <img src="./imdb.svg" alt="IMDB Rating" />
                <span> 9.9 </span>
            </div>

            <span> 2021 - Kids - Movie </span>

            <img className={styles.logo} style={{marginLeft: '-4px'}}  src="./wish-dragon-logo.png" alt="Logo do Filme" />

            <p className={styles.synopsis}>
            Determined teen Din is longing to reconnect with his childhood best friend when he meets a wish-granting dragon who shows him the magic of possibilities.
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