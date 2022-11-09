import { collection, getDocs, where, query} from "firebase/firestore";
import { db } from "../firebase";
import LeftSidebar from "../components/LeftSidebar"
import Userinfo from "../components/Userinfo";
import BlogCard from "../components/BlogCard";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { BlogCardLoading } from "../utils";

const Bookmarkpage = () => {
    const [bookmarks, setBookmarks] = useState([]) 
    const [error, setError] = useState('') 
    const [userInfo, setUserInfo] = useState([]) 

    const {user} = useContext(AuthContext)

    useEffect(()=>{
        // This function is getting the logged in user bookmark from firebase 
        const fetchBookmark = async () => {
            try{
                const querySnapshot = await getDocs(collection(db, "blogs"));
                let list = []
                querySnapshot.forEach((doc) => {
                    list.push(doc.data())  
                });  
                let filteredBlog = list.filter(item => item.bookmarkUsers.bookmarkedList.includes(user.uid))
                setBookmarks(filteredBlog)
                if(filteredBlog.length === 0) {
                    console.log(filteredBlog);
                    throw new Error('No bookmark')
                }
            }catch(e){
                console.log(e);
                setError(e)
                console.log(error);
            }
        }
        const fetchUserInfo = async (uid) => {
            try{
                const q = query(collection(db, "users"), where("id", "==", uid));
                const querySnapshot = await getDocs(q);
            
                let list = [];
                querySnapshot.forEach((doc) => {
                    list.push(doc.data())
                    console.log(list);
                });

                setUserInfo(list);
            }catch(e){
                console.log(e);
            }    
        }
        fetchBookmark()
        fetchUserInfo(user.uid)
    }, [user.uid, error])

    return(
        <section>
            <LeftSidebar />
            <section className="sm:ml-20  min-h-full flex ">
            <div className="py-12 px-4 sm:px-10 md:px-20 w-full">
                <header>
                    {/* <h1 className="font-bold mb-10 text-5xl">{userBlogs && userBlogs[0].displayName}</h1> */}
                    <div className="border-b border-lightGray pb-[.8rem]">
                        <button className="border-b -mb-[5rem] pb-[.8rem] border-black/70">Bookmark</button>
                       
                    </div>
                </header>
                <main className="py-8">
                    <section className="flex flex-col gap-y-10">
                     
                        {   
                            bookmarks.length > 0 ? bookmarks.map((blog, index) => <BlogCard key={index} blog={blog} />) :  error ? <p>No Bookmark</p> : <><BlogCardLoading/><BlogCardLoading/><BlogCardLoading/></>
                        }
                    </section>    
                </main>

            </div>
            <Userinfo peek={userInfo[0]} />
        
        </section>
        </section>
    )
}

export default Bookmarkpage;