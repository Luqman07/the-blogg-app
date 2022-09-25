import { useParams } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar"
import Userinfo from "../components/Userinfo"
import { useState, useEffect, useContext } from "react";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { FaHeart, FaRegHeart, FaRegBookmark, FaBookmark } from "react-icons/fa";
import Comment from "../components/Comments";
import { AuthContext } from "../context/authContext";


const Blogdetailpage = ({likeCount, setLikeCount}) => {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    const [comments, setComments] = useState([])
    const [toggleLikes, setToggleLikes] = useState(false)
    const [toggleBookMark, setToggleToggleBookMark] = useState(false)
    const {user} = useContext(AuthContext)
    const [count, setCount] = useState(null) 
    const dateFormatter = (timestamp) => {
        const d = new Date( timestamp * 1000 );        
        return  (d.getHours() <= 9 ? '0'+d.getHours() : d.getHours()) + ":" + d.getMinutes() + ', by ' + d.toDateString() ;
    }
    const timeUi = ()=>{
        const date = new Date()
        return ((date.getHours() <= 9 ? '0'+date.getHours() : date.getHours()) + ":" + date.getMinutes() + ', by ' + date.toDateString())
    }

    // Update the "like" field
    const handleLike = async () => {

        const blogRef = doc(db, "blogs", blog?.blogId);
        // This if is checking the if user's id is included in the array
        if(!blog?.like.likedUsers.includes(user.uid)){
            blog?.like.likedUsers.push(user.uid)
            setCount(blog?.like.likedUsers.length)
            setToggleLikes(true)
            await updateDoc(blogRef, {
                "like.likedUsers": blog.like.likedUsers,
                "like.likeCount": count
            });
            setLikeCount(count)
            return
        }
        // This block here is to remove the users id from the array of likeUsers
        let index = blog?.like.likedUsers.indexOf(user.uid)
        blog?.like.likedUsers.splice(index, 1)
        setCount(blog?.like.likedUsers.length)
        setToggleLikes(false)
        await updateDoc(blogRef, {
            "like.likedUsers": blog.like.likedUsers,
            "like.likeCount": count
        });
        setLikeCount(blog?.like.likedUsers.length)
        console.log('Update done');  
    }
    useEffect(()=>{
        // This function is getting the logged in user blogs from firebase 
        const fetchBlog = async () => {
            const q = query(collection(db, "blogs"), where("blogId", "==", id));
            const querySnapshot = await getDocs(q);
            
            querySnapshot.forEach((doc) => {
                setBlog(doc.data())
                setCount(doc.data().like.likedUsers.length)
                if(doc.data().like.likedUsers.includes(user.uid)) setToggleLikes(true)
            }); 
        }
        const fetchComment = async () => {
            const q = query(collection(db, "comments"), where("blogId", "==", id));
            const querySnapshot = await getDocs(q);
        
            let list = [];
            querySnapshot.forEach((doc) => {
              list.push(doc.data())
            });
            setComments(list);    
        }
        fetchBlog()
        fetchComment()
         
    }, [id, user.uid])
    

    return ( 
        <>
            <LeftSidebar />
            {blog && 
            <section className="md:ml-20 min-h-full flex">
            <div className="py-12 px-5 sm:px-7 md:px-20 w-full">
                <header>
                    <div className="flex items-center mb-6">
                        <div className="img w-12 h-11 rounded-full bg-dark-mode dark:bg-lightGray "></div>
                        <div className="flex justify-between w-full ml-2">
                            <div>
                                <p className="username text-md font-semibold">{blog?.displayName}</p>
                                <span className="text-gray text-sm">{dateFormatter(blog?.timeStamp.seconds)}</span>
                            </div>
                            <section>
                            {toggleBookMark ? <FaBookmark className="cursor-pointer inline mr-1" /> : <FaRegBookmark className="cursor-pointer inline mr-1"  />}
                            </section>
                        </div>
                    </div>
                    <h2 className="font-bold mb-10 text-3xl">{blog?.title}</h2>
                </header>
                <main className="py-4">
                    <figure className="overflow-hidden w-full ">
                        <img src={blog?.img} className="w-full"  alt="" />
                    </figure>
                    <p className="mt-7 mb-5">{blog?.description}</p>
                    <section>            
                        {toggleLikes ? <FaHeart className="cursor-pointer inline mr-1" onClick={handleLike} /> : <FaRegHeart className="cursor-pointer inline mr-1" onClick={handleLike} />}
                        {blog && count && count > 1 ? <><span>{count}</span><span>likes</span></> : <><span>{count}</span><span>like</span></> }
                        {blog && comments.length > 1 ? <><span className="ml-2">{comments.length}</span><span>comments</span></> : <><span className="ml-2">{comments.length}</span><span>comment</span></>}
                    </section>
                    <section className="mt-5">
                        <h3 className="mb-4 max-w-md ">Comments</h3>
                        
                        {comments.length > 0 ? comments.map(comment => 
                            (<div key={comment.commentId} className="bg-lightGray mb-2 rounded py-2 px-4 max-w-md dark:bg-darkBackground">
                                <div className="flex items-center mb-1">
                                    <div className="img w-8 h-8 rounded-full bg-dark-mode dark:bg-lightGray mr-3"></div>
                                    <div className="flex">
                                        <div className="">
                                            <p className="username text-sm font-semibold -mb-2">{comment.displayName}</p>
                                            
                                            {comment.timeStamp.seconds !== undefined ? <span className="text-gray text-xs">{dateFormatter(comment.timeStamp.seconds)}</span>: <span className="text-gray text-xs">{timeUi()}</span>}
                                        </div>
                                    </div>
                                </div>
                                <p>{comment.content}</p>
                            </div>)) : <h3>No Comments</h3>}
                    </section>

                </main>
                <Comment blog={blog} setComments={setComments} comments={comments}/>

            </div>
            <Userinfo name={blog?.displayName}/>
        </section>}  
        </>
     );
}
 
export default Blogdetailpage;