import React from 'react'
import './App.css'
import {  AuthProvider } from './auth'
import NewComments from './NewComments'
import Comments from './Comments'
import CreateUser from './CreateUser'


function App() {
 
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
