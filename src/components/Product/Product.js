import React from 'react';
import './Product.css'
const Product = ({product,addToCard}) => {
    const {strMealThumb,strMeal}=product
    return (
        <div className='product'>
           <div className="product-info">
           <img src={strMealThumb} alt="" /> 
           <h3>{strMeal}</h3>
           <button onClick={()=>addToCard(product)}>Add Card</button>
           <button className='mx-2'>Details</button>
           </div>
        </div>
    );
};

export default Product;