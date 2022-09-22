// import { blogs } from "../utils";
import BlogCard from "./BlogCard";
import RightSidebar from "./RightSidebar";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";


const Maincontent = () => {
    const [blogz, setBlogz] = useState([])
    const [likeCount, setLikeCount] = useState(0)
    
    useEffect(() => {
        // This function fetches all the blog data from firebase and sets the blog state
        const fetchAllData = async () => {
            const querySnapshot = await getDocs(collection(db, "blogs"));
            let list = []
            querySnapshot.forEach((doc) => {
                list.push(doc.data())
            });  
            setBlogz(list)
        }
        fetchAllData() 
        
    },[likeCount])
    
    return ( 
        <section className="md:ml-20 min-h-full flex ">
            <div className="py-12 px-5 sm:px-10 md:px-20 w-full">
                <header>
                    <div className="border-b border-lightGray pb-[.8rem]">
                        <button className="border-b -mb-[5rem] pb-[.8rem] border-black/70">All</button>
                        <button className="mx-4">Athletics</button>
                    </div>
                </header>
                <main className="py-8">
                    <section className="flex flex-col gap-y-10">
                        {   
                            blogz.length > 0 ? 
                            (blogz.map((blog, index) => <BlogCard key={index} blog={blog} setLikeCount={setLikeCount}/>)) : (<h3>No Blogs</h3>)
                        }
                    </section>    
                </main>

            </div>
            {blogz.length > 0 ? <RightSidebar blogz={blogz} /> : null}
        </section>
     );
}
 
export default Maincontent;