'use client';
import React, { useState } from 'react';

function Product() {
  const [products, setProducts] = useState([]);

  const handleClick = async () => {
    console.log('Fetching products...');
    try {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Fetch Products
      </button>

      {products.length > 0 && (
        <ul className="mt-4 space-y-2">
          {products.map((product) => (
            <li key={product.id} className="border p-2 rounded">
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Product;
