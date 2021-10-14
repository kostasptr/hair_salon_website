import React from 'react';
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../images/logo3.jpg';
import './Header.css';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.myNav = React.createRef();
    this.myNav2 = React.createRef();

    this.openMenu = false;
    this.showNav = true;
    this.showNav2 = true;
  }
  
  render(){

    const activateMenu = () => {
      this.myRef.current.style.height = this.openMenu ? "35px" : "240px";
      this.openMenu = !this.openMenu;
      this.myNav.current.style.display = this.showNav ? "block" : "none";
      this.showNav = !this.showNav;
      this.myNav2.current.style.display = this.showNav2 ? "block" : "none";
      this.showNav2 = !this.showNav2;
      // if( this.myRef.current.style.height < "100px"){
      //   this.myRef.current.style.height = "500px";
      // }
      // else {
      //   this.myRef.current.style.height = "33px";
      // }

      // var x = this.myRef("flex-header");
      
      // if (x.current.className === "flex-header"){
      //   x.current.className += "responsive";
        
      // } else {
      //   x.current.className = "flex-header";
        
      // }
    };

    return (
    
    <header className="App-Header">
    <nav className="flex-header responsive" ref={this.myRef}>
    
      <div>
        <a href="/">
          <img className="logoWest" src={logo} alt="john west icon" />
        </a>
      </div>
      <div className="navigationMobile" ref={this.myNav}>
        <ul className="nav-items">
          <li className="nav-link"><Link to="/"> Home </Link></li>
          <li className="nav-link"><Link to="hair"> Hair </Link></li>
          <li className="nav-link"><Link to="products"> Products We Use </Link></li>
          <li className="nav-link"><Link to="history"> Our History </Link></li>
          <li className="nav-link"><Link to="cafe"> Cafe </Link></li>
        </ul>
      </div>
      <div className="navigationMobile" ref={this.myNav2}>
        <ul className="nav-items">
          <li className="nav-link">+30 6972827033</li>
          <li className="nav-link"><Link to="book"> Book Online </Link></li>
          <li className="nav-link"><Link to="contact"> Contact </Link></li>
        </ul>
      </div>
      <div className="dropdown">
        <button onClick={activateMenu}>
          <span><FontAwesomeIcon icon={faBars} /></span>
        </button>
      </div>
    </nav>
    </header>

    )
  }
}
export default Header;