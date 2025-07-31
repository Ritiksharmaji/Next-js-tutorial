import React from 'react'

async function userList(){
    let res = await fetch('https://dummyjson.com/users');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    res = await res.json();
    let  users = res.users;
    return  users;
}
 async  function UsersPage() {
    const users = await userList();
    console.log(users);
    return (
        <div>
            <h4>UsersPage</h4>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
 
}

export default UsersPage