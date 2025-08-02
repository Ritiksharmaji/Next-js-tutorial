import { redirect } from 'next/navigation'
import React from 'react'
function UserPage() {
redirect('/about');
  return (
    <div>
        <h2>UserPage</h2>
    </div>
  )
}

export default UserPage