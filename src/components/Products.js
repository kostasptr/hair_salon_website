import React from 'react';
import './Products.css';
import eco from '../images/eco_friendly.png'

function Products() {
  return (
    <div className="App-Products">
      <div className="flex-page">
      <div className="introduction_container">
        <p>We love edgy hairstyles and bold fashion statements that is why when it
        comes to our products our main focus is organic.
        </p>
      </div>

      <div>
        <img src={eco} alt="eco friendly sign" className="eco_image"></img>
      </div>

      <div className="products_container">
        <div className="greenLine">
          <p className="hover-target">Recyclable Products</p>
          <p className="hide">Our natural approach to ingredients
          ensures a remarkable result for everyone with no impact to our
        planet.</p>
        </div>

        <div className="greenLine">
        <p className="hover-target">No Animal-Derived Ingredients</p>
          <p className="hide">We only use high
          quality products that are cruelty free and plant based delivered in
        recyclable packaging.</p>
        </div>

        <div className="greenLine">
        <p className="hover-target">Formaldehyde-Free Keratin Treatments</p>
          <p className="hide">It is our belief that turning to clean and natural solutions
        is not an option but an absolute necessity for our ecosystem’s survival.</p>
        </div>
      
        <div className="greenLine">
        <p className="hover-target">Ammonia-Free Hair Color</p>
          <p className="hide">We prefer organic options that promote healthy and shiny hair.</p>
        </div>

        <div className="greenLine">
        <p className="hover-target">Negative Carbon Footprint Products</p>
          <p className="hide">Yep, amazing hair and a happy planet can be possible.</p>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Products;