import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
     <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact />
          <Route path='/services' />
          <Route path='/products' />
          <Route path='/sign-up' />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
