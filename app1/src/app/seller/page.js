import React from 'react'
import User from '../../components/user'
function page() {
  return (
    <div>
        <h1>Seller Page</h1>
        <p>Welcome to the seller&apos;s dashboard. Here you can manage your products, view sales, and more.</p>
        <User />
    </div>
  )
}

export default page