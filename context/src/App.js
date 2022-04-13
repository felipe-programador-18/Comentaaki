import  firebase from './firebase'
import './App.css'

//create structure about testing connection about firebase
const ref = firebase.database().ref('test')
ref.on('value', snapshoot => { console.log(snapshoot.val())} )


function App() {
  return (
    <div >
    
    </div>
  )
}

export default App;
