import { createContext } from 'react';
import { auth } from "../firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp, updateDoc } from "firebase/firestore"; 
import { db } from "../firebase";
// import { useContext } from "react";
// import { AuthContext } from "../context/authContext";
import { useState } from 'react';


export const LogicContext = createContext()

export const LogicContextProvider = ({ children }) => {

    const [signUpUser, setSignUpUser] = useState(null)
    const [signUpError, setSignUpError] = useState(null)
    // const { dispatch } = useContext(AuthContext)

    
    // The signUp function is in the logic context hook so as to seperate UI from logic as much as possible, plus it returns the user obj and signup err 
    const signUp = async (fullName, email, password) => {
      try{
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        setSignUpUser(user)
        const data = { 
          id: user.uid,
          fullName,
          email,
          bio: '',
          profileUrl: '',
          about: '',
          timeStamp: serverTimestamp()
        }
        console.log(signUpUser)
        await setDoc(doc(db, "users", user.uid), data);
        await updateProfile(auth.currentUser, {
          displayName: fullName
          }).then((user) => {
              // Profile updated!
              console.log('Profile Updated');
          }).catch((error) => {
              console.log(error);
          });
      }catch(e){
        setSignUpError('E-mail already in use')
        console.error("Error adding document: ", e);
      }
      return {signUpUser, signUpError}
    }
    
    
 
  let value = {
    signUp,
  }
  return (
    <LogicContext.Provider value={value}>
      { children }
    </LogicContext.Provider>
  )

}