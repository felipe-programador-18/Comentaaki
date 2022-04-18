import React from 'react'
import { Usedatabase } from "./database"
import Comment from './Comment'

const Comments = () => {
    const data = Usedatabase('comments')
    // this !data meanings if value is null comparitive
    if(!data){
     return <p>Anymore comments send moment</p>
    }
    //create variable to caught all ids
     const ids = Object.keys(data)
     if(ids.length === 0){
       return <p>Loading .....</p>
     }
    return ids.map(id => {
       return <Comment key={id} comment={data[id]} />
    })
  }
  

export default Comments  