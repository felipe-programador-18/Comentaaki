import React, {useState, useEffect} from 'react'
import firebase from './firebase' 

export const AuthContext = React.createContext()

const UseGetUser = () => {
 const [users, setusers] = useState(null) 
  useEffect(() => {
  firebase.auth().onAuthStateChanged( currentusers => {
  if(currentusers){
     setusers(currentusers)
  }else{
    setusers(null)
   }
  })
 }, [])
 return users
}

// create ways of access with autentication
const UserCreateUser = () => {
 const [state, setstate] = useState({
     error:'',
     success:''
 })
 const CreateUser = (email, password) => {
 firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(users => {
    if(users){
        setstate({
            ...state,
            success : 'ok',

        })
    }
   })
 }
  () .catch(err => {
     setstate({
         ...state,
         error: err.message
     })
   })
   return [state, CreateUser]
}


//theorical this gonna control all state aplications!!!
export const AuthProvider = ({children}) => {
  const users = UseGetUser()
  const [CreateUserstate, CreateUser] = UserCreateUser()
  return(
        <AuthContext.Provider value={ {users,
        CreateUser:{
            CreateUserstate, CreateUser
        }
        }} >
         {children}
        </AuthContext.Provider>
    )
}


