
import Recommended from "./Recommended";

const Userinfo = ({ userInfo }) => {
    const userName = () => userInfo.split(' ')[0]

    return ( 
        <section className="border-lightGray w-[32rem] py-12 px-5 h-screen ml-auto border-l sticky top-0 bottom-0">
            {/* <h3 className="mb-5">User</h3> */}
            <div className="flex flex-col mb-6">
                <picture className="img w-32 h-32 rounded-full bg-dark-mode mr-2"></picture>
                <p className="username text-lg font-bold mt-4">{userInfo}</p>
                <p className="username text-sm  ">{userName()}</p>
            </div>
            <hr className="text-lightGray mb-4"/>
            <Recommended />
        </section>
     );
}
 
export default Userinfo;