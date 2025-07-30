import React from 'react'

async function ProductList(params) {
    let data = await fetch('https://dummyjson.com/products');
    data = await data.json();
    return data.products;
    
}
 async function ServerSideFetch() {
    let products = await ProductList();
    console.log(`ServerSideFetch products:`, products);
  return (
    <div>
        <h5>ServerSideFetch product List</h5>
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ServerSideFetch