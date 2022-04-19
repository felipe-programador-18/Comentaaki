import React, {useContext} from 'react'
import './App.css'
import { AuthContext, AuthProvider } from './auth'
import NewComments from './NewComments'
import Comments from './Comments'
import CreateUser from './CreateUser'
import { useContext } from 'react'

function App() {
  const auth = useContext( AuthContext)
  return (
    <AuthProvider>
    <div > 
      <NewComments/>     
      <Comments /> 
      <CreateUser />
    </div>
    </AuthProvider>
  )
}

export default App;
