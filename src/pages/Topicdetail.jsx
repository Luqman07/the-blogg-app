import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import LeftSidebar from "../components/LeftSidebar";
import Userinfo from "../components/Userinfo";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { BlogCardLoading } from "../utils";
import { AuthContext } from "../context/authContext";


const Topicdetailpage = () => {
    const [topicPosts, setTopicPosts] = useState([])
    const [error, setError] = useState('')
    const [userInfo, setUserInfo] = useState([])
    const { topic } = useParams()
    const {user} = useContext(AuthContext)
    console.log(topic);

    useEffect(()=>{
        const fetchTopicBlogs = async () => {
            try{
                const q = query(collection(db, "blogs"), where("topic", "==", topic));
                const querySnapshot = await getDocs(q);
                
                let list = []
                querySnapshot.forEach((doc) => {
                    list.push(doc.data())
                    console.log(list);
                });  
                setTopicPosts(list)
                if(list.length === 0) {
                    console.log(list.length);
                    throw new Error('No blog')
                }
            }catch(e){
                    console.log(e);
                    setError(e)
            }
        }
        const fetchUserInfo = async () => {
            try{
                const q = query(collection(db, "users"), where("id", "==", user.uid));
                const querySnapshot = await getDocs(q);
                
                let list = []
                querySnapshot.forEach((doc) => {
                    list.push(doc.data())
                });  
                setUserInfo(list)
            }catch(e){
                console.log(e);
            }
        }
        fetchTopicBlogs()
        fetchUserInfo()
    }, [topic])

    return ( 
        <section>
            <LeftSidebar/>
            <section className="sm:ml-20  min-h-full flex ">
                <div className="py-12 px-5 sm:px-10 md:px-16 w-full md:w-[100%]">
                    <header>
                        <h1 className="font-bold mb-10 text-3xl md:text-5xl">{topic}</h1>
                        <div className="border-b border-lightGray pb-[.8rem]">
                            <button className="border-b -mb-[5rem] pb-[.8rem] border-black/70">Posts</button>
                        
                        </div>
                    </header>
                    <main className="py-8">
                        <section className="flex flex-col gap-y-10">
                    
                            {   
                                topicPosts.length > 0 ? topicPosts.map((blog, index) => <BlogCard key={index} blog={blog} />) :  error ? <p>No Post</p> : <><BlogCardLoading/><BlogCardLoading/><BlogCardLoading/></>
                            }
                        </section>    
                    </main>

                </div>

                <Userinfo peek={userInfo[0]}/>
            </section>
        </section>
     );
}
 
export default Topicdetailpage;