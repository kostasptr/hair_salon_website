import React from 'react';
import './History.css';
import history1 from '../images/history_1.jpg'
import history2 from '../images/history_2.jpg'
import history3 from '../images/history_3.jpg'
import history4 from '../images/history_4.jpg'


function History() {
  return(
    <div className = "App-History">

      <div className="container-history">
        <div className="history_photos">
          <img src={history1} alt="who we are" />
          <p className="text_above_image position1">WHO</p>
        </div>
        <div className="text_container">
          <p>Alex and Eve met in the early 80's in London and soon became close friends. Both college students at that time shared a mutual passion for the fashion industry so they experimented a lot with crazy outfits and wild hair a new way to reinvent themselves.</p>
          <p>Both fans of rock music embraced the new era and had urge to create something unique. When the song "Rock me Amadeus" was releasedin 1985 they were inspired to open a hairdresser where everyone could find their personal style. Of course, the place was named after the song of Austrian singer Flco. For their salon Alex and Eve visioned an atmosphere that would bring back the magic of the 80's.</p>
        </div>
      </div>

      <div className="container-history">
        <div className="history_photos">
        <img src={history2} alt="where our history begun" />
        <p className="text_above_image position2">WHERE</p>
        </div>
        <div className="text_container">
          <p>In Abbey Street. According to Alex, it was a very small studio but for them it was the perfect spot to begin. "Customers felt like home and that was the most important thing for us." They worked hard to create a cutting-edge hair salon. Soon, Amadeus became well known for the outstanding service, brilliant hairstyling and vibrant atmoshpere.</p>
        </div>
      </div>

      <div className="container-history">
        <div className="history_photos">
        <img src={history3} alt="when did we start" />
        <p className="text_above_image position3">WHEN</p>
        </div>
        <div className="text_container">
          <p>Their vision became reality in 1989 when the hairdresser opened for the first time and welcomed their customers in a firnedly and cozy flat. In 1991, since the number of customers continued to grow rapidly the owners made the decision to move from the original place and relocated their business to a new building in the center of London.</p>
        </div>
      </div>

      <div className="container-history">
        <div className="history_photos">
        <img src={history4} alt="how we came up with this idea" />
        <p className="text_above_image position4">IDEA</p>
        </div>
        <div className="text_container">
          <p>Alex and Eve put themselves into their craft. Style and beauty is a form at art. Amadeus as a concept expands beyond it, embracing self-expression and uniqueness...</p>
        </div>
      </div>        
    </div>
  );
}
export default History;