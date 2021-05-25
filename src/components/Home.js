/* eslint-disable no-template-curly-in-string */
import React from 'react';
import './Home.css';
import hair from '../images/home1.jpg';
import cafe from '../images/home2.jpg';
import products from '../images/home3.jpg';
import book from '../images/home4.jpeg';
import history from '../images/home5.jpeg';
import contact from '../images/home6.jpeg';

function Home() {
  return(
    <div className = "App-Home pattern1">

      <div className = "container-div">
        <a href="Hair">
          <div className="container-image-serv"> 
            <img src={hair} alt="woman with curly hair in front of α trumpet vine fence" className="image-serv" />
            <div className="services-description-container"><span className="services-description"><p>In Amadeus we see each face as a piece of art ready to be presented to the world</p></span></div>
          </div> 
        </a>
        <a href="Hair" className="services-title-container"><span className="services-title">Hair</span></a>
        <div className="services-description-container"><span className="services-description"><p>In Amadeus we see each face as a piece of art ready to be presented to the world</p></span></div>
      </div>      

      <div className = "container-div">
        <a href="Products">
          <div className="container-image-serv">
            <img src={products} alt="products we use" className="image-serv" />
            <div className="services-description-container"><span className="services-description"><p>cccccccccccccccccccccccc</p></span></div>
          </div>
        </a>
        <a href="Products" className="services-title-container"><span className="services-title">Products</span></a>
        <div className="services-description-container"><span className="services-description"><p>cccccccccccccccccccccccc</p></span></div>
      </div>

      <div className = "container-div">
        <a href="Cafe">
          <div className="container-image-serv"> 
            <img src={cafe} alt="woman in bath with flowers" className="image-serv" />
            <div className="services-description-container"><span className="services-description"><p>For our friends and guests that want to feel a taste of 80’s in their coffee</p></span></div>
          </div> 
        </a>
        <a href="Cafe" className="services-title-container"><span className="services-title">Cafe</span></a>
        <div className="services-description-container"><span className="services-description"><p>For our friends and guests that want to feel a taste of 80’s in their coffee</p></span></div>
      </div>

      <div className = "container-div">
        <a href="History">
          <div className="container-image-serv">
            <img src={history} alt="our history" className="image-serv" />
            <div className="services-description-container"><span className="services-description"><p>eeeeeeeee</p></span></div>
          </div>
        </a>
        <a href="History" className="services-title-container"><span className="services-title">History</span></a>
        <div className="services-description-container"><span className="services-description"><p>eeeeeeeeeee</p></span></div>
      </div>

      <div className = "container-div">
        <a href="Book">
          <div className="container-image-serv">
            <img src={book} alt="book online" className="image-serv" />
            <div className="services-description-container"><span className="services-description"><p>ddddddddddddddd</p></span></div>
          </div>
        </a>
        <a href="Book" className="services-title-container"><span className="services-title">Book online</span></a>
        <div className="services-description-container"><span className="services-description"><p>ddddddddddddddd</p></span></div>
      </div>

      

      <div className = "container-div">
        <a href="Contact">
          <div className="container-image-serv">
            <img src={contact} alt="fffffffffff" className="image-serv" />
            <div className="services-description-container"><span className="services-description"><p>fffffff</p></span></div>
          </div>
        </a>
        <a href="Contact" className="services-title-container"><span className="services-title">Contact</span></a>
        <div className="services-description-container"><span className="services-description"><p>fffffffffff</p></span></div>
      </div>

    </div>
  );
}
export default Home;