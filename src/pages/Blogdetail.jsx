import { useParams } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar"
import Userinfo from "../components/Userinfo"
import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { FaRegHeart, FaRegBookmark, FaPen } from "react-icons/fa";

const Blogdetailpage = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    
    
    useEffect(()=>{
        // This function is getting the logged in user blogs from firebase 
        const fetchBlog = async () => {
            const q = query(collection(db, "blogs"), where("blogId", "==", id));
            const querySnapshot = await getDocs(q);
            
            let list;
            querySnapshot.forEach((doc) => {
              console.log()
              list = doc.data()
            });
            setBlog(list)  
            // const filteredBlog = list.filter(blog => blog.docId === id)  
        }
        fetchBlog()
         
    }, [id])
    const dateFormatter = (timestamp) => {
        const d = new Date( timestamp );        
        return  (d.getHours() <= 9 ? '0'+d.getHours() : d.getHours()) + ":" + d.getMinutes() + ',by ' + d.toDateString() ;
    }
    // console.log(blog);  
    return ( 
        <>

            <LeftSidebar />
            <section className="md:ml-20 min-h-full flex">
                <div className="py-12 px-5 sm:px-7 md:px-20 w-full">
                    <header>
                        <div className="flex items-center mb-6">
                            <div className="img w-12 h-12 rounded-full bg-dark-mode dark:bg-lightGray "></div>
                            <div className="flex justify-between w-full ml-2">
                                <div>
                                    <p className="username text-md font-semibold">{blog?.displayName}</p>
                                    <span className="text-gray text-sm">{dateFormatter(blog?.timeStamp.nanoseconds)}</span>
                                </div>
                                <section>
                                    <FaPen className="mr-4 inline" size={17}/>
                                    <FaRegHeart className="mt-1 mr-4 inline" size={20}/>
                                    <FaRegBookmark className="mt-1 inline" size={21}/>
                                    {/* <FaHeart className="mt-1 mr-2 inline" size={20} /> */}
                                </section>
                            </div>
                        </div>
                        <h2 className="font-bold mb-10 text-3xl">{blog?.title}</h2>
                    </header>
                    <main className="py-4">
                        <figure className="overflow-hidden w-full ">
                            <img src={blog?.img} className="w-full"  alt="" />
                        </figure>
                        <p className="mt-6">{blog?.description}</p>   
                    </main>

                </div>
                <Userinfo name={blog?.displayName}/>
            </section>
        </>
     );
}
 
export default Blogdetailpage;