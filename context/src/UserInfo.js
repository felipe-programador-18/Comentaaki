import React, { useState ,useContext} from 'react'
import { AuthContext } from './auth'

const UserInfo = () => {
 const [newDisplayName, setdisplayname] = useState('')
 // here i am check if don't having nothing, not go show none!
 if(auth.users  === null){
    return null
  }  

 const {displayName} = auth.users
 const [alternativeDisplayName] = auth.users.email.split('@')
 const dn = displayName || alternativeDisplayName

 const auth = useContext(AuthContext)

  return( <>
      <p> Hi there!! {dn} !  </p>
      <input type='text' value={newDisplayName}  />
      <button onClick={}>Save Display Name</button>
  </>
  )
}


export default UserInfo