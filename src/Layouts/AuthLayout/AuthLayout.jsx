import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Components/NavBar';

const AuthLayout = () => {
    return (
        <div>
            <header className='py-2 w-11/12 mx-auto'>
                <NavBar/>
            </header>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;