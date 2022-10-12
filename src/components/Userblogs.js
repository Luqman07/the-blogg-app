import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import Userinfo from "./Userinfo";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";

import { BlogCardLoading } from "../utils";


const Userblogs = () => {
    const [userBlogs, setUserBlogs] = useState([]) 
    const { userId } = useParams()
    console.log(userId);
    useEffect(()=>{
        // This function is getting the logged in user blogs from firebase 
        const fetchUserBlog = async () => {
            const q = query(collection(db, "blogs"), where("userPost.uid", "==", userId));
            const querySnapshot = await getDocs(q);
            
            let list = []
            querySnapshot.forEach((doc) => {
              list.push(doc.data())
            });  
            console.log(list[0].userPost);
            setUserBlogs(list)
        }
        fetchUserBlog()
        
    }, [userId])

     
    return ( 
        <section className="ml-20  min-h-full flex ">
            <div className="py-12 px-20 w-full">
                <header>
                    <h1 className="font-bold mb-10 text-5xl">{userBlogs[0]?.userPost.displayName}</h1>
                    <div className="border-b border-lightGray pb-[.8rem]">
                        <button className="border-b -mb-[5rem] pb-[.8rem] border-black/70">Posts</button>
                    </div>
                </header>
                <main className="py-8">
                    {<section className="flex flex-col gap-y-10">
                        {   
                            userBlogs.length > 0 ? userBlogs.map((blog, index) => <BlogCard key={index} blog={blog} userId={userId}/>): <><BlogCardLoading/><BlogCardLoading/><BlogCardLoading/></>
                        }
                    </section> }    
                </main>

            </div>
            {userBlogs.length > 0 && <Userinfo peek={userBlogs[0].userPost}/>}
        </section>
     );
}
 
export default Userblogs;