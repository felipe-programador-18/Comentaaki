import React, {useState, useEffect} from 'react'
import  firebase from './firebase'
import './App.css'
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

  return (
    <div > 
      <NewComments/>     
      <Comments /> 
      
    </div>
  )
}

export default App;
