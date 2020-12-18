import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import Container from './components/Container';
import Header from './components/Header'
import Map from './components/Map'

import Home from './components/Home';


function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (

      <Header />,
      <Home />
      
    );
  };

export default App;