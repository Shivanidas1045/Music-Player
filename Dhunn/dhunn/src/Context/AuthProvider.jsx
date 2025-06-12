import React, { useState } from 'react'
import { AuthContext } from './AuthContext'

const AuthProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn]=useState(false)


  return (
    <div><AuthContext.Provider>{children}</AuthContext.Provider></div>
  )
}

export default AuthProvider;