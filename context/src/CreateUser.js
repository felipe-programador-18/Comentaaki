import React, {useContext, useState} from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
  const auth = useContext(AuthContext)
  
  //here down i create usestate to caught all date of both email and name
  const [form, setform] = useState({email:'', passwd:''})
  //passes two parameter to receive field and events
  const onChange = campo => evt => {
    //theoritecal i need use spring operator to caught inside out all form
    setform({
     ...form,
     [campo]: evt.target.value
    })
  } 

  return ( <>
    <h3>Create New account</h3>
    {JSON.stringify(auth.CreateUser)}
    <input type='text' placeholder='Your email:'/>
    <input type='text' placeholder='Your Password:'/>
     <button onClick={() => { auth.CreateUser.CreateUser('machadoprogrammerfelipe2016@outlook.com', 'martins18')}} >+++</button>
   
   </>)
}

export default CreateUser