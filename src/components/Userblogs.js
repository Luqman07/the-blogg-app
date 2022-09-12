import { useState, useEffect, useContext } from "react";
// import { blogs } from "../utils";
import BlogCard from "./BlogCard";
import Userinfo from "./Userinfo";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/authContext";

const Userblogs = ({ userProp, userInfo }) => {
    const [userBlogs, setUserBlogs] = useState([])
    const {user} = useContext(AuthContext) 
    // console.log(user);
    useEffect(()=>{
        // This function is getting the logged in user blogs from firebase 
        const fetchUserBlog = async () => {
            const q = query(collection(db, "blogs"), where("id", "==", user.uid));
            const querySnapshot = await getDocs(q);
            
            let list = []
            querySnapshot.forEach((doc) => {
              list.push(doc.data())
            });  
            setUserBlogs(list)
        }
        fetchUserBlog()
         
    }, [user.uid])
    return ( 
        <section className="ml-20  min-h-full flex ">
            <div className="py-12 px-20 w-full">
                <header>
                    <h1 className="font-bold mb-10 text-5xl">{userProp}</h1>
                    <div className="border-b border-lightGray pb-[.8rem]">
                        <button className="border-b -mb-[5rem] pb-[.8rem] border-black/70">Home</button>
                       
                    </div>
                </header>
                <main className="py-8">
                    <section className="flex flex-col gap-y-10">
                        {   
                            userBlogs?.map((blog, index) => <BlogCard key={index} blog={blog}/>)
                        }
                    </section>    
                </main>

            </div>
            <Userinfo userInfo={userInfo}/>
        </section>
     );
}
 
export default Userblogs;