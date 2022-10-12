import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect, useContext } from "react";
import BlogCard from "./BlogCard";
import { BlogCardLoading } from "../utils";
import { AuthContext } from "../context/authContext";

const ManagePost = () => {
    const [userPosts, setUserPosts] = useState([]) 
    const {user} = useContext(AuthContext)
    const [ren, setRen] = useState(false)
    const deletePost = async (id) => {
        await deleteDoc(doc(db, "blogs", id));
        setRen(!ren)
    }

    useEffect(()=>{
        // This function is getting the logged in user blogs from firebase 
        const fetchUserBlog = async () => {
            const q = query(collection(db, "blogs"), where("userPost.uid", "==", user.uid));
            const querySnapshot = await getDocs(q);
            
            let list = []
            querySnapshot.forEach((doc) => {
              list.push(doc.data())
            });  
            setUserPosts(list)
        }
        fetchUserBlog()
        
    }, [ren])

    return ( 
        <section>
            <h2 className="text-2xl mb-3 font-semibold mt-10">Posts</h2>
            <hr className="text-grey mb-8"/>
                <main >
                    {<section className="flex flex-col gap-y-10">
                        {   
                            userPosts.length > 0 ? userPosts.map((blog, index) => <div key={index}><BlogCard blog={blog} userId={user.uid}/><div className="border-b py-4"><button className="bg-pink px-5 py-2 text-right mx-auto font-medium rounded-full" onClick={()=>deletePost(blog.blogId)}>Delete</button></div></div>): <><BlogCardLoading/><BlogCardLoading/><BlogCardLoading/></>
                        }
                    </section> }    
                </main>
        </section>
     );
}
 
export default ManagePost;