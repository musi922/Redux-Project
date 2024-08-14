import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../src/features/User';

const Login = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button className='bg-green-400 text-5xl' onClick={()=>{dispatch(login({name:"Richardo", age:20, email:"richardo@gmail.com"}))}}>Login</button>
            <button onClick={()=>dispatch(logout())}>Logout</button>
        </div>
    );
}

export default Login;
