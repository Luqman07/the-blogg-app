import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { createContext, useReducer } from 'react'
import { auth } from "../firebase"


export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(authReducer, {
    user: null, 
    authIsReady: false
  })

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({type: 'AUTH_IS_READY', payload: user})
    })
    return unsub
  },[])
  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  )
}