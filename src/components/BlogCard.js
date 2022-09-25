import { FaRegBookmark, FaRegHeart, FaHeart } from "react-icons/fa"
import { useLocation, Link } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase"
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useEffect } from "react";


const BlogCard = ({blog, userId, setLikeCount}) => {
    // The count variable is being set to the value of likedUser arr length its getting from firebase for each blog
   
    const { pathname } = useLocation()
    const {user} = useContext(AuthContext)

    const dateFormatter = (timestamp) => {
        const d = new Date( timestamp * 1000);        
        return  (d.getHours() <= 9 ? '0'+ d.getHours() : d.getHours()) + ":" + d.getMinutes() ;
    }
    // // Update the "like" field
    // const handleLike = async () => {
    //     const blogRef = doc(db, "blogs", blog.blogId);
    //     // This if is checking the if user's id is included in the array
    //     if(!blog.like.likedUsers.includes(user.uid)){
    //         blog.like.likedUsers.push(user.uid)
    //         setCount(blog.like.likedUsers.length)
    //         setToggle(true)
    //         await updateDoc(blogRef, {
    //             "like.likedUsers": blog.like.likedUsers,
    //             "like.likeCount": count
    //         });
    //         setLikeCount(count)
    //         return
    //     }
    //     // This block here is to remove the users id from the array of likeUsers
    //     let index = blog.like.likedUsers.indexOf(user.uid)
    //     blog.like.likedUsers.splice(index, 1)
    //     setCount(blog.like.likedUsers.length)
    //     setToggle(false)
    //     await updateDoc(blogRef, {
    //         "like.likedUsers": blog.like.likedUsers,
    //         "like.likeCount": count
    //     });
    //     setLikeCount(blog.like.likedUsers.length)
    //     console.log('Update done');  
    // }
    // useEffect(()=>{
    //     if(blog.like.likedUsers.includes(user.uid)) setToggle(true)
    //     console.log(blog.like.likedUsers.includes(user.uid));
    // },[])
    
    return ( 
        <section>
            <div className="flex justify-between items-center">
                <div className="blog md:w-[20rem] lg:w-[30rem]">
                    <div className="flex">
                        <picture className="img w-5 h-5 rounded-full bg-dark-mode dark:bg-lightGray mr-2"></picture>
                        <Link to={`/${blog.uid}`}><p className="username text-sm font-semibold">{blog.displayName}</p></Link>
                    </div>
                    <Link to={`/blog/${blog.blogId}`}>
                        <p className="text-2xl text-black/90 dark:text-lightGray font-bold leading-6 my-1.5">{blog.title}</p>
                        <p className="text-md text-black/75 dark:text-lightGray leading-5 my-1.5">{blog.snippet}</p>
                    </Link>   
                    <div className="">
                        <Link to={`/topic/${blog.topic}`.toLowerCase()}><span className="text-sm px-3 py-0.5 rounded-full font-medium cursor-pointer bg-lightGray text-black">{blog.topic}</span></Link>
                        {/* <FaRegBookmark className="text-sm text-black/70 cursor-pointer"/> */}
                    </div>
                </div>
                <figure className="overflow-hidden w-52 h-36 ml-2 bg-dark-mode">
                    <img src={blog.img} className="w-full "  alt="" />
                </figure>
            </div>

            {pathname === `/${userId}` ? <hr className="text-lightGray mt-10" /> : null}
        </section>
     );
}
 
export default BlogCard;