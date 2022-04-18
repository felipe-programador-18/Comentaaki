import React, {useState, useEffect} from 'react'
import firebase from './firebase' 

export const AuthContext = React.createContext()


const UseisAuth = () => {
 const [user, setusers] = useState({}) 
  useEffect(() => {
  firebase.auth().onAuthStateChanged( Currentusers => {
  if(Currentusers){
    
  }else{

   }
  })
 }, [])
}


//theorical this gonna control all state aplications!!!
export const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={ {isAuth:1}} >
         {children}
        </AuthContext.Provider>
    )
}


