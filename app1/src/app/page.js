import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <UserName />
      <UserName name="mahima sharma"/>
       <UserName name="Ankit  sharma"/>
        <UserName name="Priyanshu sharma"/>
      <main className={styles.main}>
       <h1>Home Page</h1>
      </main>
     
    </div>
  );
}

const UserName = ({name})=>{
  return (
    <h2 className={styles.userName}> {name ? name:"Ritik sharma"} </h2>
  )
}
