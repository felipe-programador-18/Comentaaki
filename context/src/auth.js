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
            success:'Ok'
        })
    }
   })
   .catch(err => {
     setstate({
         ...state,
         error: err.message
     })
   })
}
   return [state, CreateUser]
}

// this object is to create signout!!! 
//remember i have passes it down
const signout = () =>{
    firebase
    .auth()
    .signOut()
    .then( () => {
        console.log('sign out')
    })
} 

//theorical this gonna control all state aplications!!!
export const AuthProvider = ({children}) => {
  const users = UseGetUser()
  const [CreateUserstate, CreateUser] = UserCreateUser()
  return(
        <AuthContext.Provider value={ {users,
        CreateUser:{
            CreateUserstate, CreateUser, signout
        }
        }} >
         {children}
        </AuthContext.Provider>
    )
}


