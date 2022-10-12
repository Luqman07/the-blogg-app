import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import LeftSidebar from "../components/LeftSidebar";
import Userinfo from "../components/Userinfo";
import { blogs } from "../utils";


const Topicdetailpage = () => {
    const { topic } = useParams()
    // const che
    const topicCategory = blogs.filter(blog => blog.category.toLowerCase() === topic )
    console.log(topicCategory);
    return ( 
        <section>
            <LeftSidebar/>
            <section className="md:ml-20  min-h-full flex ">
                <div className="py-12 px-4 md:px-20 w-full">
                    <header>
                        <h1 className="font-bold mb-10 text-5xl">{topic}</h1>
                        <div className="border-b border-lightGray pb-[.8rem]">
                            <button className="border-b -mb-[5rem] pb-[.8rem] border-black/70">Posts</button>
                        
                        </div>
                    </header>
                    <main className="py-8">
                        <section className="flex flex-col gap-y-10">
                        
                            {   
                                // bookmarks.length > 0 ? bookmarks.map((blog, index) => <BlogCard key={index} blog={blog} />) :  error ? <p>No Bookmark</p> : <><BlogCardLoading/><BlogCardLoading/><BlogCardLoading/></>
                            }
                        </section>    
                    </main>

                </div>

                <Userinfo/>
            </section>
        </section>
     );
}
 
export default Topicdetailpage;