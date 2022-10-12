import { letter } from "../utils";
const Sidetrendcard = ({blog}) => {
 
    return ( 
        <section>
            <div className="blog mt-3">
                <div className="flex">
                <picture className="img w-6 h-6 rounded-full  mr-2">
                            {blog?.userPost.userProfileUrl ? <img src={blog?.userPost.userProfileUrl} alt="" /> : <div className="w-6 h-6 rounded-full bg-green font-bold text-white flex justify-center items-center"><span>{letter(blog.userPost.displayName)}</span></div>}
                        </picture>
                    {/* <p className="username text-sm">{blog.username}</p> */}
                </div>
                <p className="text-md text-black/90 dark:text-lightGray font-bold leading-5 my-1.5">{blog?.title}</p>
                {/* {pathname === 'user/home' ? null : <span className="text-sm">{blog.createdAt}</span>} */}
            </div>

        </section>
     );
}
 
export default Sidetrendcard;