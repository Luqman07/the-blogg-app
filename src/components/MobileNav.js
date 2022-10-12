import {Link} from "react-router-dom"
import { FaHome, FaRegBookmark, FaPen, FaUserCircle, FaRegBell } from "react-icons/fa"
import Toggletheme from "./Toggletheme";


const MobileNav = () => {
    return ( 
        <section className=" fixed bottom-0 w-full border-t h-14 sm:hidden bg-white dark:bg-dark-mode">
            <div className="">
                <ul className="flex px-4 h-14 items-center justify-between">
                    <li className=" "><Link to={"/home"}><FaHome className=" " size={25} /></Link></li>
                    <li className=" "><Link to={"/bookmark"}><FaRegBookmark  size={20}/></Link></li>
                    {/* <li className=" "><Link to={"#"}><FaRegBell size={20}/></Link></li> */}
                    <li className=""><Link to={"/new-blog"}><FaPen className="" size={18}/></Link></li>
                    <li className="mb-2  "><Toggletheme className="mb-10" /></li>
                    <li className=""><Link to={"/settings"}><FaUserCircle className="" size={30}/></Link></li>
                </ul>
                {/* <ul className="mt-6"> */}
                    {/* <li className="mt-3"><button className="-none p-1 rounded border  bg-green text-white" onClick={handleLogout}>Log Out</button></li> */}
                {/* </ul> */}
            </div>
        </section>
     );
}
 
export default MobileNav;