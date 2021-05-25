import React from 'react';
import './Header.css';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../images/logo3.jpg';

function Header() {

  function myFunction () {
    const HEIGHTNEW = document.querySelector(".flex-header");
    const TOGGLEMENU1 = document.querySelector(".order1");
    const TOGGLEMENU3 = document.querySelector(".order3");
      if (HEIGHTNEW.style.height === "70px"){
        HEIGHTNEW.style.height = "auto";
        TOGGLEMENU1.style.display = "flex";
        TOGGLEMENU3.style.display = "flex";
      }
      else {
        HEIGHTNEW.style.height = "70px";
        TOGGLEMENU1.style.display = "none";
        TOGGLEMENU3.style.display = "none";
      }
  }

  return(
    <div className = "App-Header">
      <header>
          <nav className="flex-header">

            <div role="navigation" aria-label="" className="nav-menu order1">
              <ul className="nav-items">
                <li className="nav-link"><a href="Home"> Home </a></li>
                <li className="nav-link"><a href="Hair"> Hair </a></li>
                <li className="nav-link"><a href="Products"> Products We Use </a></li>
                <li className="nav-link"><a href="Cafe"> Cafe </a></li>
                <li className="nav-link"><a href="History"> Our History </a></li>
              </ul>
            </div>

            <div className="brand order2">
              <picture>
                <a href="Home"><img className="logoWest" src={logo} alt="john west icon" /></a>
              </picture>
            </div>

            <div role="navigation" aria-label="Customer service" className="nav-menu order3">
              <ul className="nav-items bottom-space">
                <li className="nav-link"><a href="Telephone"> +30 6972827033 </a></li>
                <li className="nav-link"><a href="Email"> Email Us </a></li>
                <li className="nav-link"><a href="Book"> Book Online </a></li>
                <li className="nav-link"><a href="Contact"> Contact </a></li>  
              </ul>
            </div>

            <div className="dropdown order4">
              <button onClick={myFunction} className="toggle-icons dropbtn">
                <span><FontAwesomeIcon icon={faBars} /></span>
              </button>
            </div>
            
          </nav>
        </header>
    </div>
  );
}
export default Header;