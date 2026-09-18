// src/App.jsx
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Footer from './static/Footer';
import Home from './pages/Home';
import Nav from './static/Nav';
import Error from './pages/Error';
import Stylesheet from './pages/Stylesheet';
import TicTacToe from './pages/TicTacToe';

export default function App() {
  return (
    <Router>
      <main>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/style' element={<Stylesheet />} />
        <Route path='/tictactoe' element={<TicTacToe />} />
        <Route path='*' element={<Error code={404} />} />
      </Routes>
      <Footer />
      </main>
    </Router>
  )
}