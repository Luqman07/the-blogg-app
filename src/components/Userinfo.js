
// import { LogicContext } from "../context/logicContext";
import { InfoLoader, letter } from "../utils";
import Recommended from "./Recommended";

const Userinfo = ({ peek }) => {
    // const {user} = useContext(AuthContext)
    // console.log(peek);
    return ( 
        <section className="border-lightGray w-[35rem] py-12 px-5 h-screen ml-auto border-l sticky top-0 bottom-0 hidden lg:block">
            {/* <h3 className="mb-5">User</h3> */}
            {peek ?
                <div className="flex flex-col mb-6">
                    <picture className="img w-32 h-32 rounded-full  mr-2">
                            {peek.userProfileUrl ? <img src={peek.userProfileUrl} alt="" /> : <div className="w-32 h-32 rounded-full bg-green font-bold text-white flex justify-center items-center"><span className="text-6xl">{letter(peek.displayName)}</span></div>}
                        </picture>
                    <p className="username text-lg font-bold mt-4">{peek.displayName}</p>
                    <p className="username text-sm  ">{peek.email}</p>
                </div> : <InfoLoader/>
            }
            <hr className="text-lightGray mb-4"/>
            <Recommended />
        </section>
     );
}
 
export default Userinfo;