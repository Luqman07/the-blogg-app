import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)
  useEffect(() => {
    if(localStorage.getItem('theme') === 'dark'){
      setTheme('dark')
      // console.log(localStorage.getItem('theme'));
    }else{
      setTheme('light')
      // console.log(localStorage.getItem('theme'));
    }
  }, [])
  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
      // console.log(localStorage.getItem('theme'));
    }else{
      document.documentElement.classList.remove('dark')
      // console.log(localStorage.getItem('theme'));
    }
  }, [theme])
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      { children }
    </ThemeContext.Provider>
  )

}