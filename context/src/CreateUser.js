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
    <input type='text' placeholder='Your email:' value={form.email} onChange={onChange('email')}  />
    <input type='text' placeholder='Your Password:' value={form.passwd} onChange={onChange ('password')}  />
     <button onClick={() => { auth.CreateUser.CreateUser(form.email, form.passwd)}} >Create accounte !!</button>
   
   </>)
}

export default CreateUser