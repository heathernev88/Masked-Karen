import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';
import Input from './components/Input'


// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(<App />, document.getElementById("root"));


ReactDOM.render(
       <Auth0Provider
        domain = "dev-d0njv51c.us.auth0.com"
        clientId = "BcfARqtZjQ5Tdr0QpApeuU3kVmcTg1kZ"
        redirectUri = {window.location.origin}
         >
    <App />
    <Input />
  </Auth0Provider>,
    document.getElementById('root'),
  );