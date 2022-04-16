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


const Comments = ({visible}) => {
  const endpoints = visible ? 'test' : 'test/a'
  const data = Usedatabase(endpoints)
  return (
    <pre> {JSON.stringify(data)} </pre>
  )
}




function App() {
  const [, save] = UsedatabasePush('test')
  return (
    <div >
      <button onClick={() => { 
         save({value1:1, valorb:2})
      }} > Toggle</button>
    
       <Comments visible={visible}/> 
      
    </div>
  )
}

export default App;
