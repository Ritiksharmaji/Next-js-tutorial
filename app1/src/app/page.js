'use client';

import styles from "./page.module.css";
import { useState } from 'react';
console.log(process.env);

export default function Home() {
  return (
    <div className={styles.page}>
      <UserName />
      {/* <UserName name="mahima sharma"/>
       <UserName name="Ankit  sharma"/>
        <UserName name="Priyanshu sharma"/> */}
      <main className={styles.main}>
       <h1>Home Page</h1>
       {/* <h2>normal</h2> */}
       <button onClick={()=> alert("button CLicked please make sure to check propally")}>Click Here</button>
        <StateChange />
        <ChangeVariable />
      </main>
     
    </div>
  );
}

const UserName = ({name})=>{
  return (
    <h2 className={styles.userName}> {name ? name:"Ritik sharma"} </h2>
  )
}

const StateChange = ({propsname})=>{
  const [name, setName] = useState("Rohit sharma");
  const changeName = () => {
    setName(propsname ? propsname : "Ritik sharma" );
    console.log(name);
  }
  return (
    <div>
      <h2 className={styles.userName}> {name} </h2>
      <button onClick={changeName}>Change Name State</button>
    </div>
  )
}

const ChangeVariable = ({name})=>{
  let newName = name ? name: "Mohit sharma";
  const changeName = () => {
    // here we are not using state, so it will not re-render the component but the variable will change
    // this is just a variable, not a state
    // so it will not cause a re-render
    // it will just change the value of the variable
    // and the component will not re-render
    newName = name ? name: "Ritik sharma";
    console.log(newName);
  }
  return (
    <div>
      <h2 className="changed-by-variable"> {newName} </h2>
      <button onClick={changeName}>Change Name By Variable</button>
    </div>
  )
}