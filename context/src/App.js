import React, {useState, useEffect} from 'react'
import  firebase from './firebase'
import './App.css'


const Comments = () => {
  const [data, setdata] = useState({})
  useEffect(() => {
    const ref = firebase.database().ref('test')
  ref.on('value', snapshoot => {
     console.log(snapshoot.val())
     setdata(snapshoot.val())
    })
    return () => {
      console.log('cleanup')
    }
  }, [])
  return (
    <pre> {JSON.stringify(data)} </pre>
  )
}

function App() {
  const[visible, toggle] = useState(true)
  return (
    <div >
      <button onClick={() => toggle(!visible)} > Toggle</button>
       {visible && <Comments/> }
     
    </div>
  )
}

export default App;
