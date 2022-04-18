import React,{useState} from 'react'
import { UsedatabasePush } from './database'
import firebase from './firebase'

const NewComments = props => {
    const [, save] = UsedatabasePush('comments')
    const [comment, setcomment] = useState('')
    const CreateComments = () => {
      if( comment!== ''){
      save({
        content: comment,
        createAT: firebase.database.ServerValue.TIMESTAMP,
        users:{
          id:"1",
          name:'Felipe programmer 18'
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