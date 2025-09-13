import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.confg";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signInUser = (email , password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  const createNewUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth,email, password)
  }
  const logout = () =>{
    return signOut(auth)
  }
  const userInfo = {
    user,
    setUser,
    createNewUser,
    logout,
    signInUser
  };
  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
    })
    return() =>{
      unsubscribe();
    }
  },[])
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
