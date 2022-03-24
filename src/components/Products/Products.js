import React, { useEffect, useState } from 'react';
import './Products.css'
const Products = () => {
    const [products,setProducts]=useState(0);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
        .then(res=>res.json())
        .then(data=>setProducts(data.meals))
    },[])
    return (
        <div className='container products'>
            <div className="products-info">
                {
                   products.map() 
                }
            </div>
            <div className="product-summary">
                <h1>Product Summay List</h1>
            </div>
        </div>
    );
};

export default Products;