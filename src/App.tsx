
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FlightPage } from './pages/FlightPage'
import { MediaPage } from './pages/MediaPage'
import { MediaPageDetail } from './pages/MediaDetailPage'
import { MusicPage } from './pages/MusicPage'
import { ServicesPage } from './pages/ServicesPage'
import './App.css'
import { Layout } from './components/Layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<FlightPage />} />
          <Route path='/media' element={<MediaPage />} />
          <Route path='/media/:title' element={<MediaPageDetail />} />
          <Route path='/music' element={<MusicPage />} />
          <Route path='/services' element={<ServicesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
