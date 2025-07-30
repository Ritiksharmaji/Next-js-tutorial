import React from 'react';
import Product from './product'; // Client Component

export default function ServerSideFetch() {
  return (
    <div>
      <h5>Client-Side Fetched Product List</h5>
      <Product />
    </div>
  );
}
