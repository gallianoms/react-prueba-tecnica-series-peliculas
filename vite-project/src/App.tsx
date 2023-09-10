import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import SeriesList from './features/streaming/SeriesList'
import MoviesList from './features/streaming/MoviesList'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/series' element={<SeriesList />} />
        <Route path='/movies' element={<MoviesList />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
