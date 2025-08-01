// app/ssg/users/[userId]/page.jsx
import getUsers from '../../../../../ssg/service/getUsers';

// this function generates static paths for each user
// so that Next.js can pre-render the pages at build time and also supports dynamic routing
// so we don't need to fetch users on every request
// it will generate a static page for each user based on their ID 
export async function generateStaticParams() {
  const users = await getUsers();

  return users.map(user => ({
    userId: user.id.toString(),
  }));
}

export default async function Page({ params }) {
  const { userId } = await  params;
  const users = await getUsers();
  const user = users.find(u => u.id.toString() === userId);

  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>Particular User Details Page</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
