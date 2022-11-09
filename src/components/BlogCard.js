import { useLocation, Link } from "react-router-dom";
import { letter, dateFormatter } from "../utils";
import Moment from 'react-moment';

const BlogCard = ({ blog, userId }) => {    
    const { pathname } = useLocation()
    
    return ( 
        <section>
            <div className="flex justify-between items-center">
                <div className="blog w-[70%] md:w-[60%] pr-5">
                    <div className="flex">
                        <picture className="img w-6 h-6 rounded-full  mr-2">
                            {blog.userPost.userProfileUrl ? <img src={blog.userPost.userProfileUrl} alt="" /> : <div className="w-6 h-6 rounded-full bg-green font-bold text-white flex justify-center items-center"><span>{letter(blog.userPost.displayName)}</span></div>}
                        </picture>
                        <Link to={`/${blog.userPost.uid}`}><p className="username text-sm font-semibold">{blog.userPost.displayName && blog.userPost.displayName.split(' ')[0]} · <Moment fromNow>{dateFormatter(blog.timeStamp.seconds)}</Moment></p></Link>
                    </div>
                    <Link to={`/blog/${blog.blogId}`}>
                        <p className="text-2xl text-black/90 dark:text-lightGray font-bold leading-6 my-1.5 truncate" title={blog.title}>{blog.title} </p>
                        <p className="text-md truncate text-black/75 dark:text-lightGray leading-5 my-1.5" title={blog.snippet}>{blog.snippet}</p>
                    </Link>   
                    <div className="">
                        <Link to={`/topic/${blog.topic}`}><span className="text-sm px-3 py-1 rounded-full font-medium cursor-pointer dark:bg-darkBackground bg-lightGray">{blog.topic}</span></Link>
                      
                    </div>
                </div>
                <figure className="overflow-hidden w-[30%] md:max-w-[40%] ">
                    <img src={blog.img} className="w-96"  alt="" />
                </figure>
            </div>

            {pathname === `/${userId}` ? <hr className="text-lightGray mt-10" /> : null}
        </section>
     );
}
 
export default BlogCard;