import React, { useState } from 'react';
import './Header.css';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../images/logo3.jpg';

function Header() {
  const [isHidden, setHidden] = useState("true");

  function toggleHidden() {
    setHidden(!isHidden);
  };

  return (
    <header className="App-Header">
      <nav className="flex-header">

        <div role="navigation" aria-label="menu 1" className="nav-menu tablet">
          <ul className="nav-items">
            <li className="nav-link"><a href="/"> Home </a></li>
            <li className="nav-link"><a href="Hair"> Hair </a></li>
            <li className="nav-link"><a href="Products"> Products We Use </a></li>
            <li className="nav-link"><a href="Cafe"> Cafe </a></li>
            <li className="nav-link"><a href="History"> Our History </a></li>
          </ul>
        </div>

        <a className="brand" href="/">
          {/* <a href="/"> */}
          <img className="logoWest" src={logo} alt="john west icon" />
          {/* </a> */}
        </a>

        <div role="navigation" aria-label="menu 2" className="nav-menu tablet">
          <ul className="nav-items bottom-space">
            <li className="nav-link">+30 6972827033</li>
            <li className="nav-link"><a href="Email"> Email Us </a></li>
            <li className="nav-link"><a href="Book"> Book Online </a></li>
            <li className="nav-link"><a href="Contact"> Contact </a></li>
          </ul>
        </div>

        <div className="dropdown">
          <button onClick={toggleHidden} className="toggle-icons dropbtn">
            <span><FontAwesomeIcon icon={faBars} /></span>
          </button>
        </div>

        <div role="navigation" aria-label="menu 1" className={'nav-menu mobile' + (isHidden ? ' hidden' : '')}>
          <ul className="nav-items">
            <li className="nav-link"><a href="/"> Home </a></li>
            <li className="nav-link"><a href="Hair"> Hair </a></li>
            <li className="nav-link"><a href="Products"> Products We Use </a></li>
            <li className="nav-link"><a href="Cafe"> Cafe </a></li>
            <li className="nav-link"><a href="History"> Our History </a></li>
            <li className="nav-link">+30 6972827033</li>
            <li className="nav-link"><a href="Email"> Email Us </a></li>
            <li className="nav-link"><a href="Book"> Book Online </a></li>
            <li className="nav-link"><a href="Contact"> Contact </a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;