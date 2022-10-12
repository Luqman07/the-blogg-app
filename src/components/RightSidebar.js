// import { blogs } from "../utils";
import { RightSideLoading } from "../utils";
import Recommended from "./Recommended";
// import Pills from "./Pills";
import Sidetrendcard from "./Sidetrendcard";

const RightSidebar = ({blogz}) => {

    return ( 
        <section className="border-lightGray w-[34rem] py-12 px-5 h-screen ml-auto border-l sticky top-0 bottom-0 hidden lg:block">
            <h3>Trending</h3>
            <div className="flex flex-col mb-2">
                {
                    blogz.length > 0 ? [blogz[0], blogz[1]].map((blog, index) => <Sidetrendcard blog={blog} key={index}/>) : <RightSideLoading/>
                }
            </div>
            <Recommended />
        </section>
    );

}


 
export default RightSidebar;