import  firebase from './firebase'
import './App.css'

function App() {
  const ref = firebase.database().ref('test')
 ref.on('value', snapshoot => { console.log(snapshoot.val())} )
  
  return (
    <div >
    
    </div>
  )
}

export default App;
