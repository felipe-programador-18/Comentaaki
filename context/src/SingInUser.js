import React, {useContext, useState} from 'react'
import { AuthContext } from './auth'

//this case i am caught all date of Createuser to create page to Singin !!!
//using same code!!


const SingInUser = () => {
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
   
  if(auth.users !== null){
    return null
  }
  return ( <>
    <h3>Sing in Accont:</h3>
    {
      auth.SingInUser.SingInUserState.error !== '' && 
      <p> {auth.SingInUser.SingInUserState.error} </p>
    
    }
    <input type='text' placeholder='Your email:' value={form.email} onChange={onChange('email')}  />
    <input type='password' placeholder='Your Password:' value={form.passwd} onChange={onChange('passwd')}  />
     
     <button onClick={() => { auth.SingInUser.SingInUser(form.email, form.passwd)}} >Sing in!</button>
   
   </>)
}

export default SingInUser
