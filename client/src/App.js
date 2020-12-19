import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Map from './components/Map';
import Home from './components/Home';
import Pictures from './components/Your-pictures';
import "./styles/navbar.css"

import LoginButton from './components/LoginButton';



function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <Router>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to= "/yourpictures">Your Pictures</Link>
            </li>
            <li>
              <Link to= "/mapofshame">Map Of Shame</Link>
            </li>

          </ul>
        </nav>
        <Route path="/" exact component = {Home} />
        <Route path="/login" component = {LoginButton}/>
        <Route path="/yourpictures" component = {Pictures}/>
        <Route path="/mapofshame" component = {Map}/>
      </Router>
    );
  };

export default App;