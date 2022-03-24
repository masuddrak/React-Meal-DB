import React from 'react';
import Details from '../Details/Details';

import './Product.css'
const Product = ({product,addToCard}) => {
    const {strMealThumb,strMeal}=product
    return (
        <div className='product'>
           <div className="product-info">
           <img src={strMealThumb} alt="" /> 
           <h3>{strMeal}</h3>
           <div className="card-btn">
           <button onClick={()=>addToCard(product)}>Add Card</button>
           <Details product={product}></Details>
           </div>
           </div>
        </div>
    );
};

export default Product;