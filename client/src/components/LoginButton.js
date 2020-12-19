import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/loginbutton.css"

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
         (
        <button className="login-button" onClick={() => loginWithRedirect({
            
                screen_hint: "signup",
              
        }) 
        }>
            Login
        </button>
         )
        )
    )
}

export default LoginButton;