import {Link, useLocation} from "react-router-dom"
import { FaUserCircle } from "react-icons/fa"
import Toggletheme from "./Toggletheme";
import { Bookmark, BookmarkFill, Home, HomeFill, Write } from "../utils";


const MobileNav = () => {
    const {pathname} = useLocation()

    return ( 
        <section className=" fixed bottom-0 z-10 w-full border-t border-lightGray h-14 sm:hidden bg-white dark:bg-dark-mode">
            <div className="">
                <ul className="flex px-4 h-14 items-center justify-between">
                    <li className=" "><Link to={"/"}>{pathname === "/" ? <HomeFill/> : <Home/>}</Link></li>
                    <li className=" "><Link to={"/bookmark"}>{pathname === "/bookmark" ? <BookmarkFill/> : <Bookmark/>}</Link></li>
                    <li className=""><Link to={"/new-blog"}><Write/></Link></li>
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