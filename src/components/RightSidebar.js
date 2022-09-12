// import { blogs } from "../utils";
import Recommended from "./Recommended";
// import Pills from "./Pills";
import Sidetrendcard from "./Sidetrendcard";

const RightSidebar = ({blogz}) => {

    return ( 
        <section className="border-lightGray w-[32rem] py-12 px-5 h-screen ml-auto border-l sticky top-0 bottom-0">
            <h3>Trending</h3>
            <div className="flex flex-col mb-2">
                {
                    [blogz[0], blogz[1]].map((blog, index) => <Sidetrendcard blog={blog} key={index}/>)
                }
            </div>
            <Recommended />
        </section>
     );
}
 
export default RightSidebar;