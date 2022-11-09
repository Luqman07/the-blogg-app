import {Link, useLocation} from "react-router-dom"
import { FaUserCircle } from "react-icons/fa"
import Toggletheme from "./Toggletheme";
import { Bookmark, BookmarkFill, Home, HomeFill, Write } from "../utils";


const LeftSidebar = () => {
    const {pathname} = useLocation()

    return ( 
        <section className=" fixed left-0 w-20 border-r border-lightGray min-h-screen overflow-y-auto hidden sm:block">
            <div className="mt-12">
                <Link to={"/"}><h3 className="bold text-center font-bold mb-16">LOGO</h3></Link>
                <ul>
                    <li className="mb-12"><Link className="block" to={"/"}>{pathname === "/" ? <HomeFill/> : <Home/>}</Link></li>
                    <li className="mb-12"><Link className="block" to={"/bookmark"}>{pathname === "/bookmark" ? <BookmarkFill/> : <Bookmark/>}</Link></li>
                </ul>
                <hr className="w-5 mt-5 mx-auto"/>
                <ul className="mt-6">
                    <li className="mb-12 mt-10"><Link className="block" to={"/new-blog"}><Write/></Link></li>
                    <li className="flex justify-center py-2 mb-24"><Toggletheme /></li>
                    <li><Link className="block" to={"/settings"}><FaUserCircle className="mx-auto" size={30}/></Link></li>
                    {/* <li className="mt-3"><button className="border-none p-1 rounded block mx-auto bg-green text-white" onClick={handleLogout}>Log Out</button></li> */}
                </ul>
            </div>
        </section>
     );
}
 
export default LeftSidebar;