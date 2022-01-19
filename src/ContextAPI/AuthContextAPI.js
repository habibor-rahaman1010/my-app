import React, { createContext, useEffect, useState } from 'react';
export const myContext = createContext();

const AuthContextAPI = ({ children }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const API = `http://localhost:5000/my_all_user`;
        fetch(API)
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => {
                console.log('something went worng!', err)
            })
    }, []);
    const allContext = {
        users,
        setUsers,
    }

    return (
        <myContext.Provider value={allContext}>
            {children}
        </myContext.Provider>
    );
};

export default AuthContextAPI;