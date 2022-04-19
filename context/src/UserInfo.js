import React, { useState ,useContext} from 'react'
import { AuthContext } from './auth'

//create one function to easily all process!!! 
//practice so much about that
const Formdisplay = ({ displayName, users}) => {
    const [newDisplayName, setdisplayname] = useState(displayName)
    const onChange = evt => {
        setdisplayname(evt.target.value)
    }
     
    //function to save new user
    const save = () => {
        if(newDisplayName !== ''){
            users.updateProfile({ displayName : newDisplayName})
        }
    }
    return ( <>
        <input type='text' value={newDisplayName} onChange={onChange}  />
        <button onClick={save} >Save Display Name</button>
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
      <Formdisplay displayName={dn} users={auth.users} />
      <button onClick={auth.signout}> Sair!</button>
  </>
  )
}


export default UserInfo