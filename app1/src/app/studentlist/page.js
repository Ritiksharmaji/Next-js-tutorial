import Link from 'next/link'
import React from 'react'

function StuentList() {
  return (
    <div>
        <h2>Student List Page</h2>
        <ul>
            <li>
                <Link href='studentlist/1'>student 1</Link>
            </li>
            <li>
                <Link href='studentlist/2'>student 2</Link>
            </li>
            <li>
                <Link href='studentlist/3'>student 3</Link>
            </li>
            <li>
                <Link href='studentlist/4'>student 4</Link>
            </li>
            <li>
                <Link href='studentlist/5'>student 5</Link>
            </li>
        </ul>
            

    </div>
  )
}

export default StuentList