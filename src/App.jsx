import './styles/global.scss'
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/Home'
import { BobSpongePage } from './pages/BobSponge'
import { SpiritPage } from './pages/Spirit'



function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bob-sponge" element={<BobSpongePage />} />
        <Route path="/raya" element={<BobSpongePage />} />
        <Route path="/spirit" element={<SpiritPage />} />
        <Route path="/wish-dragon" element={<BobSpongePage />} />
      </Routes>
    </>
  )
}

export default App
