import React from 'react';
import '../styles/Header.css';

// Component for header
function Header() {

    const menuCollapse = {
        fontSize: "1rem",
        letterSpacing: "0px"

    };
    
    const menuHamburger = {
        width: "16px",
        height: "16px"
    }

    return (
        <header className="u-clearfix u-header u-header" id="sec-7a2c">
            <div className="u-clearfix u-sheet u-sheet-1">
                <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                    <div className="menu-collapse" style={menuCollapse}>
                        {/* <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-black u-text-custom-color-1 u-text-hover-palette-2-base">
                            <svg>
                                <use xmlnsxlink="http://www.w3.org/1999/xlink" >
                                {/* {// xlinkHref="#menu-hamburger"} */}
                                {/* </use>
                            </svg> */} */
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink"><defs>
                                <symbol id="menu-hamburger" viewBox="0 0 16 16" style={menuHamburger}>
                                    <rect y="1" width="16" height="2"></rect>
                                    <rect y="7" width="16" height="2"></rect>
                                    <rect y="13" width="16" height="2"></rect>
                                </symbol>
                            </defs>
                            </svg>
                        {/* </a> */}
                    </div>
                        <div className="u-custom-menu u-nav-container">
                         <ul className="u-nav u-unstyled u-nav-1">
                             <li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-black u-text-custom-color-1 u-text-hover-palette-2-base" href="Home.html" style={{padding: "10px 20px"}}>Home</a></li>
                             <li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-black u-text-custom-color-1 u-text-hover-palette-2-base" href="Your-Pictures.html" style={{padding: "10px 20px"}}>Your Pictures</a></li>                           <li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-black u-text-custom-color-1 u-text-hover-palette-2-base" href="Login-Page.html" style={{padding: "10px 20px"}}>Login Page</a></li>
                             <li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-black u-text-custom-color-1 u-text-hover-palette-2-base" style={{padding: "10px 20px"}} href="The-Map-of-Shame.html">The Map of Shame</a></li>                   </ul>
                        </div>
                        <div className="u-custom-menu u-nav-container-collapse">
                            <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                                <div className="u-sidenav-overflow">
                                    <div className="u-menu-close"></div>
                <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li className="u-nav-item"><a className="u-button-style u-nav-link" href="Home.html" style={{padding: "10px 20px"}}>Home</a>
</li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="Your-Pictures.html" style={{padding: "10px 20px"}}>Your Pictures</a>
</li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="Login-Page.html" style={{padding: "10px 20px"}}>Login Page</a>
</li><li className="u-nav-item"><a className="u-button-style u-nav-link" style={{padding: "10px 20px"}} href="Page-1.html">The Map of Shame</a>
</li></ul>
              </div>
            </div>
            <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
          </div>
        </nav>
      </div>
    </header>
    );
}

export default Header;