
// import { LogicContext } from "../context/logicContext";
import { InfoLoader, letter } from "../utils";
import Recommended from "./Recommended";

const Userinfo = ({ peek }) => {
    console.log(peek);
    return ( 
        <section className="border-lightGray py-12 px-4 h-screen ml-auto border-l sticky top-0 bottom-0 hidden md:w-[350px] md:block">
            
            {peek ?
                <div className="flex flex-col mb-6">
                    <picture className="img w-32 h-32 rounded-full overflow-hidden">
                        {peek.profileUrl ? <img src={peek.profileUrl} alt="" /> : <div className="w-32 h-32 rounded-full bg-green font-bold text-white flex justify-center items-center"><span className="text-6xl">{letter(peek.fullName)}</span></div>}
                    </picture>
                    <p className="username text-lg font-bold mt-4">{peek.fullName}</p>
                    <p className="username text-sm  ">{peek.email}</p>
                    <p className="username text-sm  ">{peek.bio}</p>
                </div> : <InfoLoader/>
            }
            <hr className="text-lightGray mb-4"/>
            <Recommended />
        </section>
     );
}
 
export default Userinfo;