
import Recommended from "./Recommended";

const Userinfo = ({ name }) => {
    const userName = name
    console.log(userName)
    return ( 
        <section className="border-lightGray w-[32rem] py-12 px-5 h-screen ml-auto border-l sticky top-0 bottom-0 hidden lg:block">
            {/* <h3 className="mb-5">User</h3> */}
            <div className="flex flex-col mb-6">
                <picture className="img w-32 h-32 rounded-full bg-dark-mode mr-2"></picture>
                <p className="username text-lg font-bold mt-4">{userName && userName}</p>
                <p className="username text-sm  ">{userName && userName.email}</p>
            </div>
            <hr className="text-lightGray mb-4"/>
            <Recommended />
        </section>
     );
}
 
export default Userinfo;