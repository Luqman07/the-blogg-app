import TrendingCard from "./TrendindCard";
// import { blogs } from "../utils";


const Trending = ({blogs}) => {

    return(
        <section className="container mx-auto px-4 md:px-16 py-10 ">
            <h4 className="tracking-wide mb-4 font-semibold" id="trends">Trending Blogs</h4>
            {/* <div className=" grid px-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 md:px-16 dark:text-white">
            </div> */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 dark:text-grey">
                {
                    blogs?.map((blog, index) => <TrendingCard blog={blog} id={index} key={index}/>)
                }
                
            </div>
        </section>
    )
};

export default Trending;