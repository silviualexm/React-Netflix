import "./App.css";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/NavBar'
import "./components/NavBar";
import { BrowserRoute as Router, Route } from 'react-router-dom'
import Home from "./components/Home";
import Footer from "./components/Footer";
import NetflixNavBar from './components/NavBar'

function App() {
  return (
    
      <div>
        <Router>
          <NetflixNavBar />
          <Home />
          <Route path="/ShowDetail/:id" component="ShowDetail" />
          <Footer />
        </Router>
        
      </div>

  )
  }
export default App;
