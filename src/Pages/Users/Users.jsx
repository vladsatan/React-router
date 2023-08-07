import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UserCard from '../../Components/UserCard/UserCard';
import "./Users.css"

const Users = () => {

    let { users } = useLoaderData()
    
    return (
        <div className='container'>
            <h1>Users</h1>
            {users.map((user) => <UserCard user={user} key={user.id} />)}
        </div>
    );
}

export default Users;
