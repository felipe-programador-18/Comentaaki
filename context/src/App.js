import React, {useState, useEffect} from 'react'
import './App.css'
import { AuthContext } from './auth'
import NewComments from './NewComments'
import Comments from './Comments'

// create ways of access with autentication

/*firebase
.auth()
.createUserWithEmailAndPassword('machadofelipe2016@outlook.com','123martins')
.then(users => {
   return users.updateProfile({
     displayName: 'Felipe Programmer'
   })
})
*/
/*
firebase.auth().onAuthStateChanged( users => {
  if(users){
    console.log(users.displayName)
    users.updateProfile({displayName:'Felipe Martins Programer 18'})
  }
})
*/


function App() {
  const [count, setcout] = useState(0)
  return (
    <AuthContext.Provider value={{count, setcout}} >
    <div > 
      <NewComments/>     
      <Comments /> 
       <button onClick={()=> setcout(count+1)}></button>
    </div>
    </AuthContext.Provider>
  )
}

export default App;
