import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../lib/firebase'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setLoading(false)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, loading }}>{!loading && children}</AuthContext.Provider>
  )
}
