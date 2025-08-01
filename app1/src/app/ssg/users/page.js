import Link from 'next/link.js';
import getUsers from '../../../../ssg/service/getUsers.js';
export default async function Page() {
    const getUserList = getUsers();
    const users = await getUserList;
    console.log(users);

    return(
        <>
        <h3>user list Page</h3>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <Link href={`/ssg/users/${user.id}`}>
                        {user.name}
                    </Link>
                </li>
            ))}
        </ul>
        </>
    )
}