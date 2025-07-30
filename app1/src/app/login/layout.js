'use client';
import React, { use } from 'react'
import './login.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function Layout({children}) {
  const pathName = usePathname();
  console.log("pathName is:", pathName);
  return (
    <div>
        <h3>Common Layout for login</h3>
        {/* this is for conditional layout, if you are on loginadmin page then it will not show the links */}
       {pathName !== '/login/loginadmin' ? 
       <>
        <ul>
          {/* this is common layout for login */}
            <li><Link href="/login">Login main</Link></li>
            <li><Link href='/login/loginstudent'>Student login</Link> </li>
            <li><Link href='/login/loginteacher'>Teacher login</Link> </li>
        </ul>
       </>
       :
       "admin login is not available now, please try later"
       }
        {children}
    </div>

  )
}

export default Layout