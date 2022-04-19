import React, {useContext} from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
  const auth = useContext(AuthContext)
    return ( <>
     <button onClick={() => { auth.CreateUser.CreateUser('machadofelipe2016@outlook.com', 'martins18')}} ></button>
   
   </>)
}