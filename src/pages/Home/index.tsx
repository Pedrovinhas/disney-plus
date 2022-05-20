import { Header } from '../../components/Header'
import { MovieInfo } from '../../components/MovieInfo'
import { MoviePainel } from '../../components/MoviePainel'


export function Home() {
    return (
      <>
        <Header />
        <div className="containerBox">
          <MovieInfo />
          <MoviePainel />
        </div>
      </>
    )
  }