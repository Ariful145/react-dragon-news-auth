import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const auth = getAuth(app);

   useEffect( () =>{
      const unSubscribe = onAuthStateChanged(auth, currentUser=>{
         console.log("user in the auth state change", currentUser)
         setUser(currentUser);
         setLoading(false);
      });
      return () =>{
         unSubscribe();
      }
   }, [auth]);

   const logOut = ()=>{
      setLoading(true);
      return signOut(auth);
   }

   const signIn = (email, password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
   }

   const createUser = (email, password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const authInfo = {
      user,
      loading,
      createUser,
      logOut,
      signIn,
   }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;