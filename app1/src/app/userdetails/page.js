'use client';
import Script from 'next/script'
import React from 'react'

function UserDetails() {
  return (
    <div>
        <h2>user Location Identify Page</h2>
        <Script src="/location.js" 
        onLoad={() => console.log('Location script loaded successfully')}
        strategy="lazyOnload" />
        <p>Check the console for location details.</p>
    </div>
  )
}

export default UserDetails