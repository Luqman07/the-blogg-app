import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)
  useEffect(() => {
    if(localStorage.getItem('theme') === 'dark'){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }, [])
  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      { children }
    </ThemeContext.Provider>
  )

}