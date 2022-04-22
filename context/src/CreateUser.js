import React, {useContext, useState} from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
  const auth = useContext(AuthContext)
  //here down i create usestate to caught all date of both email and name
  const [form, setform] = useState({email:'', passwd:''})

  return ( <>
    <h3>Create New account</h3>
    {JSON.stringify(auth.CreateUser)}
    <input type='text' placeholder='Your email:'/>
    <input type='text' placeholder='Your Password:'/>
     <button onClick={() => { auth.CreateUser.CreateUser('machadoprogrammerfelipe2016@outlook.com', 'martins18')}} >+++</button>
   
   </>)
}

export default CreateUser