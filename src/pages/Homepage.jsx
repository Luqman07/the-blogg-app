import Slidersection from "../components/Slider";
import Trending from "../components/Trending";
import BlogLists from "../components/BlogLists";

const Homepage = () => {
    return ( 
        <section className="mt-14">
            {/* <Slidersection/> */}
            <Trending/>
            <hr className="text-lightGray"/>
            <BlogLists/>
        </section>
     );
}
 
export default Homepage;