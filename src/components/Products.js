import React from 'react';
import product1 from '../images/product1.jpg';
import './Products.css';

function Products() {
  return(
    <div className = "App-Products">
      <div className="flex-products">
        <img src={product1} alt="beauty product" className="photo-position"/>
        <p>Products we use</p> 
        <p>poy tha deixnoume to sigkekrimeno sima oikologiko poy feroun ta proionta</p>
      </div>
    </div>
  );
}
export default Products;