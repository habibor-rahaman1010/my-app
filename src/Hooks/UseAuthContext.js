import { useContext } from 'react';
import { myContext } from '../ContextAPI/AuthContextAPI';

const UseAuthContext = () => {
    return useContext(myContext)
};

export default UseAuthContext;