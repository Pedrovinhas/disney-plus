import './styles/global.scss'
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/Home'
import { BobSpongePage } from './pages/BobSponge'
import { SpiritPage } from './pages/Spirit'
import { WishDragonPage } from './pages/WishDragon'
import { RayaPage } from './pages/Raya'



function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spirit" element={<SpiritPage />} />
        <Route path="/bob-sponge" element={<BobSpongePage />} />
        <Route path="/raya" element={<RayaPage />} />
        <Route path="/wish-dragon" element={<WishDragonPage />} />
      </Routes>
    </>
  )
}

export default App
