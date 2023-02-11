import React, {createContext, useContext, useEffect, useState} from "react";

// Auth
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import { auth } from "../firebase";

const userAuthContext = createContext();
/**
 * Context used so pages can access auth.
 * @param {Prop} children - The routes under the context.
 * @returns Functions used in authContextProvider.
 */
export function UserAuthContextProvider({children}) {
  const [user, setUser] = useState({});

  /**
   * Used to log users into application with firebase
   * @param {string }email - Email used by user to log in
   * @param {string} password - Password used by user to log in
   * @returns signInWithEmailAndPassword
   */
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  /**
   * Used to create users with firebase.
   * @param {string} email - Email used to create users.
   * @param {string} password - Password used to create users.
   * @returns createUserWithEmailAndPassword
   */
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  /**
   * Used to deauthenticate users
   * @returns signOut
   */
  function logOut() {
    return signOut(auth);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth", currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <userAuthContext.Provider
      value={{user, logIn, signUp, logOut}}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
