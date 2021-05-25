import React from 'react';
import './Footer.css';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../images/logo.jpg';
// import { useForm } from "react-hook-form";
function Footer() {

  // constructor(props){
  //   super(props);
  //   this.state = {value: ''};

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  return(
    <div className = "App-Footer">
      <footer>
        <div className="flex-footer">
          <div className="div-logo-footer">
            <img src={logo} alt="logo" className="logowest-footer" />
          </div>
          
          <p><FontAwesomeIcon icon={faFacebookF} style={{color:"green"}} size="lg"/>&nbsp;
          <FontAwesomeIcon icon={faInstagram} style={{color:"red"}} size="lg"/>&nbsp;
          <FontAwesomeIcon icon={faTwitter} style={{color:"yellow"}} size="lg"/></p>
          <p>+30 6972827030, King's Street 69</p>
          
          
            {/* <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form> */}
          
          
          <form>
            <label>
              Subscribe to our newsletter<br></br>
              <input type="email" name="email" />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <p>&copy; 2021 John West</p>

        </div>
      </footer>
    </div>
  );
}
export default Footer;