// import { blogs } from "../utils";
import { RightSideLoading } from "../utils";
import Recommended from "./Recommended";
// import Pills from "./Pills";
import Sidetrendcard from "./Sidetrendcard";

const RightSidebar = ({ blogz, error }) => {

    return ( 
        <section className="border-lightGray py-12 px-5 h-screen ml-auto border-l sticky top-0 bottom-0 hidden md:block">
            <h3>Trending</h3>
            <div className="flex flex-col mb-2">
                {
                    blogz.length > 0 ? [blogz[0], blogz[1]].map((blog, index) => <Sidetrendcard blog={blog} key={index}/>) : error ? <p>No Trend</p>:<RightSideLoading/>
                }
            </div>
            <Recommended />
        </section>
    );

}


 
export default RightSidebar;