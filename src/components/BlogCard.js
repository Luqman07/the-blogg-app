// import img1 from "../assets/images/perfume.jpg"
import { FaRegBookmark } from "react-icons/fa"
import { useLocation, Link } from "react-router-dom";


const BlogCard = ({blog}) => {
    const { pathname } = useLocation()
    // const user = (param) => {
    //     return {
    //         user: param.split(" ")[0],
    //         fullName: param
    //     }
    // }
    return ( 
        <section>
            <div className="flex gap-x-16 items-center">
                <div className="blog">
                    <div className="flex">
                        <picture className="img w-5 h-5 rounded-full bg-dark-mode dark:bg-lightGray mr-2"></picture>
                        {/* <Link to={`/${user(blog.username).fullName}`}><p className="username text-sm">{blog.username}</p></Link> */}
                        <Link to={``}><p className="username text-sm font-semibold">{blog.displayName}</p></Link>
                    </div>
                    <Link to={`/blog/${blog.id}`}>
                        <p className="text-2xl text-black/90 dark:text-lightGray font-bold leading-6 my-1.5">{blog.title}</p>
                        <p className="text-md text-black/75 dark:text-lightGray leading-5 my-1.5">{blog.snippet}</p>
                    </Link>
                    <section className="flex justify-between">
                        {
                            (pathname === '/user/home' || pathname === '/user') ? 
                            ( <div className="flex items-center gap-x-5">
                                <span className="text-sm">{blog.createdAt}</span>
                                <FaRegBookmark className="text-sm text-black/70 cursor-pointer"/>
                            </div>) 
                            : 
                            <span className="text-sm">{blog.createdAt}</span>
                        }
                        <Link to={`/topic/${blog.category}`.toLowerCase()}><span className="text-sm px-3 py-0.5 rounded-full font-medium cursor-pointer bg-lightGray ">{blog.category}</span></Link>
                    </section>
                </div>
                <figure className="overflow-hidden w-72 h-[7.5rem]  bg-dark-mode">
                    <img src={blog.img} className="w-full "  alt="" />
                </figure>
            </div>

            {pathname === '/user' ? <hr className="text-lightGray mt-16" /> : null}
        </section>
     );
}
 
export default BlogCard;