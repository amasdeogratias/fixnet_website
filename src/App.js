import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/pages/Home'

function App() {
  return (
    <>
     <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={<Home />} />
          <Route path='/services' />
          <Route path='/products' />
          <Route path='/sign-up' />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
