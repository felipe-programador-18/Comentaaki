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


// this is tipy inject dependence...
const Usedatabase = endpoints => {
  const [data, setdata] = useState({})
  useEffect(() => {
    const ref = firebase.database().ref(endpoints)
  ref.on('value', snapshoot => {
     //console.log(snapshoot.val())
     setdata(snapshoot.val())
    })
    return () => {
     ref.off()
    }
  }, [endpoints])
  return data
}
// create new function to push date
//create function to inject another dates


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

const Comments = () => {
  const data = Usedatabase('comments')
  // this !data meanings if value is null comparitive
  if(!data){
   return <p>Anymore comments send moment</p>
  }
  //create variable to caught all ids
   const ids = Object.keys(data)
   if(ids.length === 0){
     return <p>Loading .....</p>
   }
  return ids.map(id => {
     return <Comment key={id} comment={data[id]} />
  })
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
