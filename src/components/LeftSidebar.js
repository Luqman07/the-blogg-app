import {Link} from "react-router-dom"
import { FaHome, FaRegBookmark, FaPen, FaUserCircle, FaRegBell } from "react-icons/fa"
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Toggletheme from "./Toggletheme";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";


const LeftSidebar = () => {
    const { dispatch } = useContext(AuthContext)
    const handleLogout = async () => {
        try{
            await signOut(auth)
            dispatch({type: "LOGOUT", payload: null})
        }catch(err){
            console.log(err)
        }
    }
    return ( 
        <section className=" fixed left-0 w-20 border-r border-lightGray min-h-screen overflow-y-auto hidden md:block">
            <div className="mt-12">
                <Link to={"/home"}><h3 className="bold text-center font-bold mb-16">LOGO</h3></Link>
                <ul>
                    <li className="mb-12"><Link className="block" to={"/home"}><FaHome className="mx-auto text-dark-mode" size={25} /></Link></li>
                    <li className="mb-12"><Link className="block" to={"/bookmark"}><FaRegBookmark className="mx-auto" size={20}/></Link></li>
                    <li className="mb-12"><Link className="block" to={"#"}><FaRegBell className="mx-auto" size={20}/></Link></li>
                </ul>
                <hr className="w-5 mt-5 mx-auto"/>
                <ul className="mt-6">
                    <li className="flex justify-center py-2"><Toggletheme /></li>
                    <li className="mb-24 mt-10"><Link className="block" to={"/new-blog"}><FaPen className="mx-auto" size={18}/></Link></li>
                    <li><Link className="block" to={"#"}><FaUserCircle className="mx-auto" size={30}/></Link></li>
                    <li className="mt-3"><button className="border-none p-1 rounded block mx-auto bg-green text-white" onClick={handleLogout}>Log Out</button></li>
                </ul>
            </div>
        </section>
     );
}
 
export default LeftSidebar;