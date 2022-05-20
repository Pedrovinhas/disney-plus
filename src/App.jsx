import './styles/global.scss'
import { Header } from './components/Header'
import { MovieInfo } from './components/MovieInfo'
import { MoviePainel } from './components/MoviePainel'

function App() {
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

export default App
