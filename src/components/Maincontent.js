// import { blogs } from "../utils";
import BlogCard from "./BlogCard";
import RightSidebar from "./RightSidebar";
import { useState, useEffect } from "react";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { BlogCardLoading } from "../utils";


const Maincontent = ({likeCount, setLikeCount}) => {
    const [blogz, setBlogz] = useState([])
    const [post, setPost] = useState([])
    const [error, setError] = useState('')
    

    useEffect(() => {
        // This function fetches all the blog data from firebase and sets the blog state
        const fetchAllData = async () => {
            try{
                const q = query(collection(db, "blogs"), orderBy("timeStamp", "desc"));
                const querySnapshot = await getDocs(q);
                let list = []
                querySnapshot.forEach((doc) => {
                    list.push(doc.data())
                });  
                setBlogz(list)
                setPost(list)
                if(list.length === 0) {
                    console.log(list.length);
                    throw new Error('No blog')
                }
           }catch(e){
                console.log(e);
                setError(e)
           }
          
        }
        fetchAllData() 
        
    },[likeCount])
    return ( 
        <section className="sm:ml-20 min-h-full flex ">
            <div className="py-12 px-5 w-full sm:px-10 md:px-16 md:w-[80%]">
                <header>
                    <div className="border-b border-lightGray pb-[.8rem]">
                        <button className="border-b -mb-[5rem] pb-[.8rem] border-black/70" onClick={() => {setPost(blogz)}}>All</button>
                    </div>
                </header>
                <main className="py-8">
                    <section className="flex flex-col gap-y-10">
                        {   
                            post.length > 0 ? 
                            (post.map((blog, index) => <BlogCard key={index} blog={blog} setLikeCount={setLikeCount}/>)) : error ? <p>No blog</p> :(<><BlogCardLoading/><BlogCardLoading/><BlogCardLoading/></>)
                        }
                    </section>    
                </main>
                {/* <Test/> */}
            </div>
            <RightSidebar blogz={blogz} error={error}/> 
        </section>
     );
}
 
export default Maincontent;