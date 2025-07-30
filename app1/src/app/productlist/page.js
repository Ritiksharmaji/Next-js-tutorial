'use client';
import React, { use, useEffect, useState } from 'react'

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect( async() => {
        console.log("ProductList component mounted");
        let response = await fetch('https://dummyjson.com/products');
        response = await response.json();
        setLoading(false);
        setProducts(response.products);
        console.log(response);
        // return () => {
        //     console.log("ProductList component unmounted");
        // };
    }, []);

  return (
    <div>
        <h5>ProductList</h5>
        <div>
            {loading ? <h2>Loading...</h2> : 
                products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProductList