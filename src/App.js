import "./App.css";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/NavBar'
import "./components/NavBar";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from "./components/Home";
import Footer from "./components/Footer";
import NetflixNavBar from './components/NavBar'
import ShowDetail from "./components/ShowDetail";
import Register from './components/Register'

function App() {
  return (
    
      <div>
        <Router>
          <NetflixNavBar />
          <Link className="nav-link" to="/register/" >Register </Link>
          <Register />
          <Route path="/"><Home /></Route>
          <Route path="/ShowDetail/:id"><ShowDetail /></Route>
          
          <Footer />
        </Router>
        
      </div>

  )
  }
export default App;
