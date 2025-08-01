// ssg/service/getUsers.js
export default async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return await res.json();
}
