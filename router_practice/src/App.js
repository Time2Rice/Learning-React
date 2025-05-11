import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navigation'>
          <nav> 
            <Link to="/">Home</Link>  <Link to="/About">About</Link> <Link to="/Contact">Contact</Link>
          </nav>
        </div>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />  
        </Routes>
      </Router>

    </div>
  );
}

export default App;
