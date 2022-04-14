import React, {useState, useEffect} from 'react'
import  firebase from './firebase'
import './App.css'

// this is tipy inject dependence
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

const Comments = ({visible}) => {
  const endpoints = visible ? 'test' : 'test/a'
  const data = Usedatabase(endpoints)
  return (
    <pre> {JSON.stringify(data)} </pre>
  )
}

const A = () => {
  const data = Usedatabase('test/a')
  return (<pre> {JSON.stringify(data)} </pre>)
}


function App() {
  const[visible, toggle] = useState(true)
  return (
    <div >
      <button onClick={() => toggle(!visible)} > Toggle</button>
       <Comments visible={visible}/> 
       <A/>
    </div>
  )
}

export default App;
