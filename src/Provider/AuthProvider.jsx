import React, { createContext, useState } from 'react';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name:"hello",
        email:'gg@gm.com'
    })
    const userInfo = {
            user,
            setUser
    }
    return (
       <AuthContext.Provider value={userInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;