const TrendingCard = ({blog, id}) => {
    return ( 
        <section className="flex">
            <div className="num text-3xl font-bold mr-4 text-lightGray">{id < 9 ? '0'+ (id+1): id+1}</div>
            <div className="blog mt-3">
                <div className="flex">
                    <picture className="img w-5 h-5 rounded-full bg-dark-mode mr-2"></picture>
                    <p className="username text-sm">{blog.username}</p>
                </div>
                <p className="text-lg text-black/90 dark:text-lightGray font-bold leading-5 my-1.5">{blog.title}</p>
                <span className="text-sm">{blog.createdAt}</span>
            </div>

        </section>
     );
}
 
export default TrendingCard;