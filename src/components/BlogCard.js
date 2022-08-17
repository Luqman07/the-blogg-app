import img1 from "../assets/images/perfume.jpg"
const BlogCard = ({blog}) => {
    return ( 
        <section className="flex gap-x-12 items-center">
            <div className="blog">
                <div className="flex">
                    <picture className="img w-5 h-5 rounded-full bg-dark-mode dark:bg-lightGray mr-2"></picture>
                    <p className="username text-sm">{blog.username}</p>
                </div>
                <p className="text-2xl text-black/90 dark:text-lightGray font-bold leading-6 my-1.5">{blog.title}</p>
                <p className="text-md text-black/75 dark:text-lightGray leading-5 my-1.5">{blog.snippet}</p>
                <section className="flex justify-between">
                 <span className="text-sm">{blog.createdAt}</span>
                 <span className="text-sm px-3 py-0.5 rounded-full font-medium cursor-pointer bg-lightGray ">Football</span>
                </section>
            </div>
            <figure className="overflow-hidden w-72 h-[7.5rem]  bg-dark-mode">
                <img src={img1} className="w-full "  alt="" />
            </figure>
        </section>
     );
}
 
export default BlogCard;