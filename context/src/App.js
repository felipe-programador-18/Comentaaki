import React, {useState, useEffect} from 'react'
import  firebase from './firebase'
import './App.css'

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
const UsedatabasePush = endpoints => {
   const [status, setstatus] = useState('')
    const save = data => {
      const ref = firebase.database().ref(endpoints)
      ref.push(data,  err => {
        if(err){
          setstatus('error aplication')
        }else{
          setstatus('SUCCESS')
        }
      })
    }
     return [status, save]
}

const Comment = (comment) =>{
  return (
    <div>
     {comment.content}
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
  return ids.map(id => {
     return <Comment key={id} comment={data[id]} />
  })
}




function App() {
  const [, save] = UsedatabasePush('comments')
  return (
    <div >
      <button onClick={() => { 
         save({
           content:'Hi there, here is my comments!!',
          users:{
            id:"1",
            name:'Felipe programmer'
          }
          })
      }} > Toggle</button>
    
       <Comments /> 
      
    </div>
  )
}

export default App;
