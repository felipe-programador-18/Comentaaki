import React, {useState} from 'react'
import  firebase from './firebase'
import './App.css'

function App() {
  const [data, setdata] = useState({})
  
  const ref = firebase.database().ref('test')
  ref.on('value', snapshoot => {
     console.log(snapshoot.val())
     setdata(snapshoot.val())
    })
  
  return (
    <div >
       <pre> {JSON.stringify(data)} </pre>
    </div>
  )
}

export default App;
