import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector((state)=>state.user.value)
    const themecolor = useSelector((state)=>state.theme.value)
    return (
        <div style={{backgroundColor:themecolor}}>
            <h1>Profile page</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default Profile;
