import React from 'react'

function Student({params}) {
    console.log("params are:", params);
    // params will contain the dynamic segment of the URL, in this case, student id
    // e.g., if the URL is /studentlist/1, params will be { student: '1' }
    // you can use this to fetch student details or display them as needed 
  return (
    <div>
        <h2>Student details</h2>
        <p>Student Id is: {params.student}</p>
    </div>
    
  )
}

export default Student