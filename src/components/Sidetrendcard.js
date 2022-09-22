// import { useLocation } from "react";
const Sidetrendcard = ({blog}) => {
    
    return ( 
        <section>
            <div className="blog mt-3">
                <div className="flex">
                    <picture className="img w-5 h-5 rounded-full bg-dark-mode mr-2"></picture>
                    {/* <p className="username text-sm">{blog.username}</p> */}
                </div>
                <p className="text-md text-black/90 dark:text-lightGray font-bold leading-5 my-1.5">{blog?.title}</p>
                {/* {pathname === 'user/home' ? null : <span className="text-sm">{blog.createdAt}</span>} */}
            </div>

        </section>
     );
}
 
export default Sidetrendcard;