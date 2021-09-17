import React from 'react';
import './Footer.css';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollButton from './ScrollButton';

function Footer() {

  return (
    <footer className="App-Footer">

      <div className="flex-footer">

        <div>
          <p>170 Crawford Street <br></br>London<br></br>W1H2JQ<br></br>United Kingdom<br></br></p>
          <p>(44) 207205-2555<br></br>info@amadeus.com</p>
          <p><strong>Follow us</strong><br></br>
            <FontAwesomeIcon icon={faFacebookF} style={{ color: "black" }} size="sm" />&nbsp;
            <FontAwesomeIcon icon={faInstagram} style={{ color: "black" }} size="sm" />&nbsp;
            <FontAwesomeIcon icon={faTwitter} style={{ color: "black" }} size="sm" />
          </p>
          <br></br>
          <p className="copyright_notice">&copy; 2021 Amadeus | All rights reserved</p>
        </div>

      </div>
      <ScrollButton />
    </footer>
  );
}
export default Footer;