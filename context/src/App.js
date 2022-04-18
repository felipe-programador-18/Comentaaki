import React from 'react'
import './App.css'
import { AuthProvider } from './auth'
import NewComments from './NewComments'
import Comments from './Comments'

function App() {
 
  return (
    <AuthProvider>
    <div > 
      <NewComments/>     
      <Comments /> 
    </div>
    </AuthProvider>
  )
}

export default App;
