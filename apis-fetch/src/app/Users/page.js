import Link from "next/link";

async function getUsers() {
  const response = await fetch("http://localhost:3001/apis/users", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

export default async function Page() {
  const users = await getUsers();

  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <Link href={`/Users/${user.id}`} key={user.id}>
            <li>{user.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
