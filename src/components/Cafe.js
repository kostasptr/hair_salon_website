import React from 'react';
import './Cafe.css';
import cassette2 from '../images/cafe.jpeg';

function Cafe() {
  return (
    <div className = "App-Cafe">
      <div className="cafe_container">
        <img src={cassette2} alt="cassettes in pink background" className="img_cafe" />
        <div className="container_for_text">
          <p className="container_title">Café AMADEUS</p>
          <br></br>
          <p className="container_text">For our friends and guests who want to feel a taste of 80’s, our cafeteria is open seven days a week!<br></br><br></br>
            Juke box never stops <a href="History" className="hereLink">here</a>...</p>
        </div>
      </div>

      <div className="playlist_container">
        <iframe src="https://www.youtube.com/embed/jCwPfr8-TMI" title="You Tube playlist" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="playlist"></iframe>
      </div>

    </div>
  );
}
export default Cafe;