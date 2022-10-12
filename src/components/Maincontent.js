// import { blogs } from "../utils";
import BlogCard from "./BlogCard";
import RightSidebar from "./RightSidebar";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { BlogCardLoading } from "../utils";


const Maincontent = ({likeCount, setLikeCount}) => {
    const [blogz, setBlogz] = useState([])
    const [post, setPost] = useState([])
    const [error, setError] = useState('')
    // const [all, setAll] = useState(false)
    // const [sport, setSport] = useState(false)
    // const [entertainment, setEntertainment] = useState(false)
    
    const filter = (fil, fn) => {
        const topicFilter = blogz.filter(item => item.topic.toLowerCase() === fil.toLowerCase())
        setPost(topicFilter)
        fn(true)
    }

    useEffect(() => {
        // This function fetches all the blog data from firebase and sets the blog state
        const fetchAllData = async () => {
            try{
                const querySnapshot = await getDocs(collection(db, "blogs"));
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
            <div className="py-12 px-5 sm:px-10 md:px-20 w-full">
                <header>
                    <div className="border-b border-lightGray pb-[.8rem]">
                        <button className="border-b -mb-[5rem] pb-[.8rem] border-black/70" onClick={() => {setPost(blogz)}}>All</button>
                        {/* <button className="ml-3 -mb-[5rem] pb-[.8rem] border-b border-black/70" onClick={() => {filter('Entertainment')}}>Entertainment</button>
                        <button className="ml-3 -mb-[5rem] pb-[.8rem] border-b border-black/70" onClick={() => {filter('Sport')}}>Sport</button> */}
                    </div>
                </header>
                <main className="py-8">
                    <section className="flex flex-col gap-y-10">
                        {   
                            // console.log(post);
                            post.length > 0 ? 
                            (post.map((blog, index) => <BlogCard key={index} blog={blog} setLikeCount={setLikeCount}/>)) : error ? <p>No blog</p> :(<><BlogCardLoading/><BlogCardLoading/><BlogCardLoading/></>)
                        }
                    </section>    
                </main>

            </div>
            <RightSidebar blogz={blogz} /> 
        </section>
     );
}
 
export default Maincontent;