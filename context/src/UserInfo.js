import React, { useState ,useContext} from 'react'
import { AuthContext } from './auth'

//create one function to easily all process!!! 
//practice so much about that
const Formdisplay = ({ displayName}) => {
    const [newDisplayName, setdisplayname] = useState(displayName)
    return ( <>
        <input type='text' value={newDisplayName}  />
        <button>Save Display Name</button>
    </>
 )
}


const UserInfo = () => {
 const auth = useContext(AuthContext)
 // here i am check if don't having nothing, not go show none!
 if(auth.users  === null){
    return null
  }  

  const {displayName} = auth.users
  const [alternativeDisplayName] = auth.users.email.split('@')
  const dn = displayName || alternativeDisplayName
  
  return( <>
      <p> Hi there!! {dn} !  </p>
      <Formdisplay displayName={dn} />
  </>
  )
}


export default UserInfo