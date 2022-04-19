import React from 'react'
import './App.css'
import {  AuthProvider } from './auth'
import NewComments from './NewComments'
import Comments from './Comments'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'

function App() {
 
  return (
    <AuthProvider>
    <div > 
      <NewComments/>     
      <Comments /> 
      <CreateUser />
      <UserInfo/>
    </div>
    </AuthProvider>
  )
}

export default App;
