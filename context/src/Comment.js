import React from 'react'
import Time from './Time'

// create new comments to adding another way
const Comment = ({comment}) =>{
    return (
      <div>
       {comment.content} por : {comment.users.name} em : <Time TIMESTAMP={comment.createAT}/>
      </div>
    )
  }

export default Comment  