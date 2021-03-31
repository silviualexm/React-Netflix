import "./App.css";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/NavBar'
import "./components/NavBar";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./components/Home";
import Footer from "./components/Footer";
import NetflixNavBar from './components/NavBar'
import ShowDetail from "./components/ShowDetail";

function App() {
  return (
    
      <div>
        <Router>
          <NetflixNavBar />
          <Home />
          <Route path="/ShowDetail/:id" render={(props) => <ShowDetail {...props} id={}/>} />
          <Footer />
        </Router>
        
      </div>

  )
  }
export default App;
