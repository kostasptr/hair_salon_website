import React from 'react';
import './Products.css';
import eco from '../images/eco_friendly.png'

function Products() {
  return (
    <div className="App-Products">

      <div className="introduction_container">
        <p>We love edgy hairstyles and bold fashion statements that is why when it
        comes to our products our main focus is organic.
        </p>
      </div>

      <div>
        <img src={eco} alt="eco friendly sign" className="eco_image"></img>
      </div>

      <div className="products_container">
        <div>
          <p>Recyclable Products</p>
          {/* <p>Our natural approach to ingredients
          ensures a remarkable result for everyone with no impact to our
        planet.</p> */}
        </div>

        <div>
          <p>No Animal-Derived Ingredients</p>
          {/* <p>We only use high
          quality products that are cruelty free and plant based delivered in
        recyclable packaging.</p> */}
        </div>

        <div>
          <p>Formaldehyde-Free Keratin Treatments</p>
          {/* <p>It is our belief that turning to clean and natural solutions
        is not an option but an absolute necessity for our ecosystem’s survival.</p> */}
        </div>
      
        <div>
          <p>Ammonia-Free Hair Color</p>
          {/* <p>We prefer organic options that promote healthy and shiny hair.</p> */}
        </div>

        <div>
          <p>Negative Carbon Footprint Products</p>
          {/* <p>Yep, amazing hair and a happy planet can be possible.</p> */}
        </div>
      </div>

    </div>
  );
}
export default Products;