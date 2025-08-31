async function getUser(id) {
  const response = await fetch(`http://localhost:3001/apis/users/${id}`, {
    cache: "no-store",
  });
  console.log("response in the Client side:", response)
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
}

export default async function Page({ params }) {
    console.log(`params id is:`,params.id)
    const id = params.id;
  const user = await getUser(id);
  const data  = [...user];
  console.log(  `user detils `, user);

  return (
    <>
      <h1>User Details</h1>
      <p><strong>ID:</strong> {user[0].id}</p>
      <p><strong>Name:</strong> {user[0].name}</p>
      <p><strong>Email:</strong> {user[0].email}</p>
    </>
  );
}
