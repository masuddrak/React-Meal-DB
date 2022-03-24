import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Summary from '../Summary/Summary';
import './Products.css'
const Products = () => {
    const [card,setCard]=useState([])
    const [products,setProducts]=useState([]);
    
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
        .then(res=>res.json())
        .then(data=>setProducts(data.meals))
    },[])
    const addToCard=(product)=>{
        const newCard=[...card,product]
        setCard(newCard)
    }
   
    let price=0;
    for(const product of card){
        price=price+(parseInt(product.idMeal)/80);
        console.log(product)
    }
    const tex=(price*2/100)
    const grandTotal=price+tex;
    return (
        <div className='container products'>
            <div className="products-info">
                {
                   products.map(product=><Product 
                    key={product.idMeal}
                    product={product}
                    addToCard={addToCard}
                   ></Product>) 
                }
            </div>
            <div className="product-summary mx-3">
                <p>Add Summay List</p>
                <hr />
                <p className='mt-3'>Items:<span className='text-warning'>{card.length}</span></p>
                <hr />
                <p>Total Price: ${price.toFixed(2)}</p>
                <hr />
                <p>Tex:${tex.toFixed(2)}</p>
                <hr />
                <p>Grand Total:${grandTotal.toFixed(2)}</p>
                <hr />
                <p>Added Items:</p>
                <hr />
                {
                    card.map(singCard=><Summary 
                        singCard={singCard}
                        key={singCard.idMeal}
                    ></Summary>)
                }
            </div>
        </div>
    );
};

export default Products;