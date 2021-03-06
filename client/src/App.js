import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Map from './components/Map';
import Home from './components/Home';
import Pictures from './components/Your-pictures';
import "./styles/navbar.css"

import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Guidelines from './components/StateGuidelines';



function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <Router>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <LoginButton />
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
            <li>
              <Link to= "/guidelines">State COVID-19 Rules</Link>
            </li>
            <li>
              <LogoutButton />
            </li>

          </ul>
        </nav>
        <Route path="/" exact component = {Home} />
        {/* <Route path="/login" component = {LoginButton}/> */}
        <Route path="/yourpictures" component = {Pictures}/>
        <Route path="/mapofshame" component = {Map}/>
        <Route path="/guidelines" component = {Guidelines}/>
      </Router>
    );
  };

export default App;