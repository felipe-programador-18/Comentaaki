import React, {useState, useEffect} from 'react'
import  firebase from './firebase'
import './App.css'
import NewComments from './NewComments'

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



const Time = ({TIMESTAMP}) => {
   const date = new Date(TIMESTAMP)
   const hours = date.getHours()
   const minute = '0'+ date.getMinutes()
   const second = '0' + date.getSeconds()
   const day = '0' + (date.getDate())
   const month = '0' + (date.getMonth()+1)
   const year =  (date.getFullYear())
  return `${day.substr(-2)}/${month.substr(-2)}/${year} ${hours}:${minute.substr(-2)}:${second.substr(-2)}`
}

// create new comments to adding another way
const Comment = ({comment}) =>{
  return (
    <div>
     {comment.content} por : {comment.users.name} em : <Time TIMESTAMP={comment.createAT}/>
    </div>
  )
}




function App() {

  return (
    <div > 
      <NewComments/>     
      <Comments /> 
      
    </div>
  )
}

export default App;
