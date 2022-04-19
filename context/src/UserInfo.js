import React, { useState ,useContext} from 'react'
import { AuthContext } from './auth'

const UserInfo = () => {
 const auth = useContext(AuthContext)
 if(auth.users  === null){
    return null
  }
  const {displayName} = auth.users
  const [alternativeDisplayName] = auth.users.email.split('@')
  return( <>
      <p> Hi there!! {displayName || alternativeDisplayName} !  </p>
  </>
  )
}


export default UserInfo