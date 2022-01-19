import React from 'react';
import Home from '../Components/Home/Home';
import AuthContextAPI from '../ContextAPI/AuthContextAPI';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    return (
        <AuthContextAPI>
            <Home></Home>
        </AuthContextAPI>
    );
};

export default Main;