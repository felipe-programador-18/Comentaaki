import React, {useContext} from 'react'
import Time from './Time'
import { AuthContext } from './auth'




// create new comments to adding another way
const Comment = ({comment}) =>{
  // remember i am caught value count flag of state count of setcount!!!
  
  return (
      <div>
       {comment.content} por : {comment.users.name} em : <Time TIMESTAMP={comment.createAT}/>
      </div>
    )
  }

export default Comment  