import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaUser } from 'react-icons/fa';
import Toggletheme from "./Toggletheme";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  console.log(navbar);
  
  return (
      <nav className="w-full fixed top-0 z-40 bg-white dark:bg-dark-mode shadow-md">
        <div className="container justify-between px-4 py-3 mx-auto sm:items-center sm:flex md:px-16">
          <div>
            <div className="flex items-center justify-between">
              <Link to={"/"}>
                  <h2 className="text-2xl font-bold">LOGO</h2>
              </Link>
              <div className="sm:hidden">
                  <button
                      className="py-2 text-gray-700 rounded-md outline-none"
                      onClick={() => {setNavbar(!navbar)}}
                  >
                      {navbar ? (
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      ) : (
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.4}
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4 6h16M4 12h16M4 18h16"
                              />
                          </svg>
                      )}
                  </button>
              </div>
            </div>
          </div>


          <div className="items-center sm:flex">
            <div
              className={` justify-self-center pb-3 mt-8 sm:block sm:pb-0 sm:mt-0 transition-all ${
                  navbar ? "block" : "hidden"
              }`}
              >
              <ul className="items-center justify-center space-y-8 sm:flex sm:space-x-6 sm:space-y-0">
                <li className="text-gray-600 hover:text-blue-600">
                    <NavLink className={({isActive}) => 
                      isActive ? "font-bold" : undefined
                  } to={"/"}>Home</NavLink>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                    <NavLink className={({isActive}) => 
                      isActive ? "font-bold" : undefined
                  } to={"#trends"}>Trending</NavLink>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                    <NavLink className={({isActive}) => 
                      isActive ? "font-bold" : undefined
                  } to={"#blogs"}>Blogs</NavLink>
                </li>
                
                

              </ul>
            </div>
            
          </div>

          <div className={`mt-8 sm:flex sm:items-center sm:pb-1 sm:mt-0 ${navbar ? "block" : "hidden"}`}>
            <Link to={"/login"} className="border hover:bg-dark-mode hover:text-white transition-all bg-red-400 outline-none px-4 py-1 mr-3 rounded-md">Login</Link>
            <button className="block mt-4 mr-3 sm:mt-0"><FaUser/></button>
            <Toggletheme/>
          </div>
        </div>
      </nav>
  );
}
 
export default Navbar;