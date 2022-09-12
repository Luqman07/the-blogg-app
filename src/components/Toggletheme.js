import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { FaMoon, FaSun } from 'react-icons/fa';

const Toggletheme = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const handleTheme = () => {
        if(localStorage.getItem('theme') === 'dark'){
          localStorage.setItem('theme', 'light')
          setTheme('light')
        }else{
          localStorage.setItem('theme', 'dark')
          setTheme('dark')
        }
    }
    // useEffect(() => {handleTheme})
    

    return ( 
        <button onClick={handleTheme} className="outline-none border-none mt-4 sm:mt-0">{theme === 'dark' ? <FaSun/> : <FaMoon/>}</button>
     );
}
 
export default Toggletheme;