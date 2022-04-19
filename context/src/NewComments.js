import React,{useState, useContext} from 'react'
import { UsedatabasePush } from './database'
import firebase from './firebase'
import { AuthContext } from './auth'


const NewComments = props => {
    const [, save] = UsedatabasePush('comments')
    const [comment, setcomment] = useState('')
    const auth = useContext(AuthContext)
    if(auth.users  === null){
      return null
    }
     console.log(auth.users)

    const {displayName} = auth.users
    const [alternativeDisplayName] = auth.users.email.split('@')
    const CreateComments = () => {
      if( comment!== ''){
      save({
        content: comment,
        createAT: firebase.database.ServerValue.TIMESTAMP,
        users:{
          id: auth.users.id,
          name: displayName || alternativeDisplayName
        }
      })
      // theoriotical this serve to controll state of text area
      setcomment('')
      }
    }
  
    return (
      <div>
        <textarea value ={comment} onChange={evt => setcomment(evt.target.value)}   />
      <button onClick={CreateComments} > Toggle</button>
    </div>
    )
  }
  

export default NewComments 