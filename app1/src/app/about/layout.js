import Link from 'next/link'
import React from 'react'
import './about.css'
function Layout({children}) {
  return (
   <>
    <div>
        <h3>Common Layout of About Page</h3>
    <div>
        <ul>
            <li><Link href="/about">About main</Link></li>
            <li><Link href='/about/aboutstudent'>About Student</Link> </li>
            <li><Link href='/about/aboutcollege'>About College</Link> </li>
        </ul>
    </div> 
    {children}  
    </div>
     
    </>
  )
}

export default Layout