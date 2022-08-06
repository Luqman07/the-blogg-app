
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
      <nav className="w-full fixed top-0 z-40 bg-white shadow">
        <div className=" justify-between px-4 mx-auto lg:max-w-7xl sm:items-center sm:flex sm:px-8">
          <div>
            <div className="flex items-center justify-between py-3 ">
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
              className={`flex-1 justify-self-center pb-3 mt-8 sm:block sm:pb-0 sm:mt-0 ${
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
                  } to={"/blog"}>Blog</NavLink>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                    <NavLink className={({isActive}) => 
                      isActive ? "font-bold" : undefined
                  } to={"/about-us"}>About Us</NavLink>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                    <NavLink to={"/"}>Contact US</NavLink>
                </li>
                

              </ul>
            </div>
            
          </div>
          <div className={`mt-8 sm:block sm:pb-0 sm:mt-0 ${navbar ? "block" : "hidden"}`}>
              <button className="border-none bg-red-400 text-white outline-none px-2 py-1 mr-2 rounded-md">Signup</button>
              <button className="block mt-2 sm:inline sm:mt-0">User</button>
            </div>
        </div>
      </nav>
  );
}
 
export default Navbar;