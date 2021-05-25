import React from 'react';
import './Cafe.css';
import cassette2 from '../images/cafe.jpeg';

function Cafe() {
  return (
    <div className = "App-Cafe">
      <div className="container-cafe">
        <img src={cassette2} alt="cassettes in pink background" className="img-cafe" />
        <div className="content-title-cafe">
        <p>Café</p>
        <p>AMADEUS</p>
        <br></br>
        <p className="content-text-margins">For our friends and guests who want to feel a taste of 80’s, our cafeteria is open seven days a week!<br></br>
          We invite you to chill out and enjoy your coffee with us.<br></br>
          Juke box never stops <a href="History" className="here-text">here</a>...</p>
        </div>
      </div>

      <div className="div-playlist">
        <iframe src="https://www.youtube.com/embed/jCwPfr8-TMI" title="You Tube playlist" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="playlist"></iframe>
      </div>

    </div>
  );
}
export default Cafe;