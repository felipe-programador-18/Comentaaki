import React, {useState, useEffect} from 'react'
import './App.css'
import { AuthProvider } from './auth'
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

function App() {
 
  return (
    <AuthProvider>
    <div > 
      <NewComments/>     
      <Comments /> 
    </div>
    </AuthProvider>
  )
}

export default App;
