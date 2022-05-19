import React, { createContext } from 'react';
import useFiresbase from '../Hooks/useFirebase';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allContext = useFiresbase()
    return (
        <AuthContext.Provider value={allContext}>
        {children}
    </AuthContext.Provider>
            
        
    );
};

export default AuthProvider;