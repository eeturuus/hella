import React, {createContext, useContext, useState, useEffect} from 'react'
import * as Google from "expo-google-app-auth";
import App from '../App';
import {auth} from '../database/firebase'



const AuthContext = createContext({user: true,
       setAuthorized: () => {},
   });

// const config = {
//   scopes: ["profile", "email"],
//   permissions: ["public_profile", "email", "gender", "location"],
// // }


export default function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    
    const [currentUser, setCurrentUser] = useState();

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup
    }

   return (
    <AuthContext.Provider 
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
};

