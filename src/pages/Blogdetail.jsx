import { useParams } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar"
import Userinfo from "../components/Userinfo"
import { useState, useEffect, useContext } from "react";
import { collection, query, where, getDocs, updateDoc, doc, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Comment from "../components/Comments";
import { AuthContext } from "../context/authContext";
import { BlogdetsLoading, letter, dateFormatter } from "../utils";
import Moment from "react-moment";


const Blogdetailpage = ({likeCount, setLikeCount}) => {
    const { id } = useParams()
    const [blog, setBlog] = useState([])
    const [comments, setComments] = useState([])
    const [userInfo, setUserInfo] = useState([])
    const [toggleLikes, setToggleLikes] = useState(false)
    const [toggleBookMark, setToggleBookMark] = useState(false)
    const {user} = useContext(AuthContext)
    const [count, setCount] = useState(null)
    

    // Update the "like" field
    const handleLike = async () => {

        const blogRef = doc(db, "blogs", blog.blogId);
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
    }
    const handleBookmark = async () => {
        // This if is checking the if user's id is included in the array
        try{
            const blogRef = doc(db, "blogs", blog.blogId);
            if(!blog?.bookmarkUsers.bookmarkedList.includes(user.uid)){
                    
                blog.bookmarkUsers.bookmarkedList.push(user.uid)
                setToggleBookMark(true)    
                await updateDoc(blogRef, {
                    "bookmarkUsers.bookmarkedList": blog?.bookmarkUsers.bookmarkedList
                });
                return
            }
            let index = blog.bookmarkUsers.bookmarkedList.indexOf(user.uid); 
            blog?.bookmarkUsers.bookmarkedList.splice(index, 1)
            setToggleBookMark(false)
            await updateDoc(blogRef, {
                "bookmarkUsers.bookmarkedList": blog.bookmarkUsers.bookmarkedList
            });

        }catch(e){
            console.log(e)
        }
        // This block here is to remove the users id from the array of likeUsers
        
    }
    useEffect(()=>{
        const fetchUserInfo = async (uid) => {
            const q = query(collection(db, "users"), where("id", "==", uid));
            const querySnapshot = await getDocs(q);
        
            let list = [];
            querySnapshot.forEach((doc) => {
              list.push(doc.data())
              console.log(doc.data());
              setUserInfo(list);   
            });
 
        }
        // This function is getting the logged in user blogs from firebase 
        const fetchBlog = async () => {
            const q = query(collection(db, "blogs"), where("blogId", "==", id));
            const querySnapshot = await getDocs(q);
            
            querySnapshot.forEach((doc) => {
                setBlog(doc.data())
                fetchUserInfo(doc.data().userPost.uid)
                setCount(doc.data().like.likedUsers.length)
                if(doc.data().like.likedUsers.includes(user.uid)) setToggleLikes(true)
                if(doc.data().bookmarkUsers.bookmarkedList.includes(user.uid)) setToggleBookMark(true)
            });
            
        }
        const fetchComment = async () => {

            const q = query(collection(db, "comments"), where("blogId", "==", id), orderBy("timeStamp"));
            const querySnapshot = await getDocs(q);
        
            let list = [];
            querySnapshot.forEach((doc) => {
              list.push(doc.data())
            });
            setComments(list);    
        }

        fetchBlog()
        fetchComment()
        blog.length > 0 && fetchUserInfo()
    }, [id, user.uid])
    

    return ( 
        <>
            <LeftSidebar />        
            <section className="sm:ml-20 min-h-full flex">
                <div className="py-12 px-5 w-full sm:px-10 md:px-16 md:w-[70%]">
                    {
                        blog.length !== 0 && userInfo.length > 0 ? 
                        <section>
                            <header>
                                <div className="flex items-center mb-6">
                                    <div className="img w-12 h-11 rounded-full overflow-hidden">
                                        {console.log(userInfo[0].profileUrl)}
                                        {userInfo.length > 0 ? <img src={userInfo[0].profileUrl} alt="" /> : <div className="w-12 h-12 rounded-full bg-green font-bold text-2xl text-white flex justify-center items-center"><span>{letter(userInfo[0].fullName)}</span></div>}
                                    </div>
                                    <div className="flex justify-between w-full ml-2">
                                        <div>
                                            <p className="username text-md font-semibold">{blog?.userPost.displayName}</p>
                                            <span className="text-gray text-sm">{<Moment fromNow>{dateFormatter(blog?.timeStamp.seconds)}</Moment>}</span>
                                        </div>
                                        <section>
                                        {toggleBookMark ? <svg onClick={handleBookmark} className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2h-9z" fill="#000"></path></svg> : <svg className="cursor-pointer" onClick={handleBookmark} width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z" fill="#000"></path></svg>}
                                        </section>
                                    </div>
                                </div>
                                <h2 className="font-bold mb-10 text-3xl">{blog?.title}</h2>
                            </header>
                            <main className="py-4">
                                <figure className="overflow-hidden max-w-[90%] mx-auto">
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
                                                <div className="img w-8 h-8 rounded-full overflow-hidden mr-3">
                                                    {comment?.dp !== "" ? <img src={comment.dp} alt="" /> : <div className="w-9 h-9 bg-green font-bold text-sm text-white flex justify-center items-center"><span className="">{letter(comment?.displayName)}</span></div>} 
                                                </div>
                                                
                                                <div className="">
                                                    <p className="username text-sm font-semibold -mb-2">{comment.displayName}</p>
                                                    {comment.timeStamp.seconds !== undefined ? <span className="text-gray text-xs">{<Moment fromNow>{dateFormatter(comment.timeStamp.seconds)}</Moment>}</span>: <span className="text-gray text-xs">{<Moment fromNow>{new Date()}</Moment>}</span>}
                                                </div>
                                                
                                            </div>
                                            <p>{comment.content}</p>
                                        </div>)) : null}
                                </section>

                            </main>
                            <Comment blog={blog} setComments={setComments} comments={comments}/>
                        </section>  : <BlogdetsLoading/>
                    }

                </div>
                {blog && <Userinfo name={blog.displayName} peek={userInfo[0]}/>}
            </section>  
        </>
     );
}
 
export default Blogdetailpage;