import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.confg";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading , SetLoding] =useState(true)

  const signInWithGoogle = () => {
    SetLoding(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithGithub = () => {
    SetLoding(true);
    return signInWithPopup(auth, githubProvider);
  };

  const signInUser = (email , password)=>{
    SetLoding(true); 
    return signInWithEmailAndPassword(auth, email, password)
  }
  const createNewUser = (email, password)=>{
    SetLoding(true); 
    return createUserWithEmailAndPassword(auth,email, password)
  }
  const updateUser = (updatedData)=>{
    return updateProfile(auth.currentUser, updatedData)
  }
  const logout = () =>{
    return signOut(auth)
  }
  const userInfo = {
    user,
    setUser,
    createNewUser,
    logout,
    signInUser,
    loading,
    SetLoding,
    updateUser,
    signInWithGoogle,
    signInWithGithub
  };
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      SetLoding(false)
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