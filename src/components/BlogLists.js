// import { blogs } from "../utils";
import BlogCard from "./BlogCard"
import Recommended from "./Recommended";
const BlogLists = ({blogs}) => {
    return ( 
    <section className="container mx-auto py-12 px-4 md:px-16 flex gap-x-28 flex-col md:flex-row">
        <section className="flex flex-col gap-y-10 basis-2/3" id="blogs">
            {
                blogs?.map((blog, index) => <BlogCard key={index} blog={blog}/>)
            }
        </section>
        <aside className="basis-1/3">
            <div className="sticky top-20">
                {/* <h4 className="text-black/95 font-semibold">Discover other topics</h4> */}
                    <Recommended />
                <hr className="text-deepGray"/>
                <div className="py-4">
                    <span className=" px-2 py-0.5 text-black/75 text-sm inline-block mr-2 mb-2">Help</span>
                    <span className=" px-2 py-0.5 text-black/75 text-sm inline-block mr-2 mb-2">Status</span>
                    <span className=" px-2 py-0.5 text-black/75 text-sm inline-block mr-2 mb-2">Writers</span>
                    <span className=" px-2 py-0.5 text-black/75 text-sm inline-block mr-2 mb-2">Blogs</span>
                    <span className=" px-2 py-0.5 text-black/75 text-sm inline-block mr-2 mb-2">Careers</span>
                    <span className=" px-2 py-0.5 text-black/75 text-sm inline-block mr-2 mb-2">Privacy</span>
                    <span className=" px-2 py-0.5 text-black/75 text-sm inline-block mr-2 mb-2">Terms</span>
                    <span className=" px-2 py-0.5 text-black/75 text-sm inline-block mr-2 mb-2">About</span>
                </div>
            </div>
        </aside>
    </section> 
    );
}
 
export default BlogLists;