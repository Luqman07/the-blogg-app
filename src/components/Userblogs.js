import { useState, useEffect } from "react";
// import { blogs } from "../utils";
import BlogCard from "./BlogCard";
import Userinfo from "./Userinfo";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
// import { AuthContext } from "../context/authContext";
import { useParams } from "react-router-dom";

const Userblogs = () => {
    const [userBlogs, setUserBlogs] = useState(null)
    // const {user} = useContext(AuthContext) 
    const { userId } = useParams()
    let name = userBlogs && userBlogs[0].displayName;
    console.log(userId);
    useEffect(()=>{
        // This function is getting the logged in user blogs from firebase 
        const fetchUserBlog = async () => {
            const q = query(collection(db, "blogs"), where("uid", "==", userId));
            const querySnapshot = await getDocs(q);
            
            let list = []
            querySnapshot.forEach((doc) => {
              list.push(doc.data())
              console.log(doc.data());
            });  
            setUserBlogs(list)
            console.log('component mounted');
        }
        fetchUserBlog()
        console.log(userBlogs && userBlogs[0].timeStamp);
        return () => {
            console.log('component unmounted');
            // userBlogs.splice(0)
            // setUserBlogs([])
        }
    }, [userId])

     
    return ( 
        <section className="ml-20  min-h-full flex ">
            <div className="py-12 px-20 w-full">
                <header>
                    <h1 className="font-bold mb-10 text-5xl">{userBlogs && userBlogs[0].displayName}</h1>
                    <div className="border-b border-lightGray pb-[.8rem]">
                        <button className="border-b -mb-[5rem] pb-[.8rem] border-black/70">Home</button>
                       
                    </div>
                </header>
                <main className="py-8">
                    <section className="flex flex-col gap-y-10">
                        {   
                            userBlogs?.map((blog, index) => <BlogCard key={index} blog={blog} userId={userId}/>)
                        }
                    </section>    
                </main>

            </div>
            <Userinfo name={name} />
        </section>
     );
}
 
export default Userblogs;