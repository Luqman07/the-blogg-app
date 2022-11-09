import Moment from "react-moment";
import { Link } from "react-router-dom";
import { letter, dateFormatter } from "../utils";



const TrendingCard = ({blog, id}) => {
    return ( 
        <section className="flex">
            <div className="num text-3xl font-bold mr-4 text-lightGray">{id < 9 ? '0'+ (id+1): id+1}</div>
            <div className="blog mt-3">
                <div className="flex">
                    <picture className="img w-6 h-6 rounded-full  mr-2">
                        {blog.userPost.userProfileUrl ? <img src={blog.userPost.userProfileUrl} alt="" /> : <div className="w-6 h-6 rounded-full bg-green font-bold text-white flex justify-center items-center"><span>{letter(blog.userPost.displayName)}</span></div>}
                    </picture>
                    <Link to={`/${blog.userPost.uid}`}><p className="username text-sm font-semibold">{blog.userPost.displayName && blog.userPost.displayName.split(' ')[0]} · <Moment fromNow>{dateFormatter(blog.timeStamp.seconds)}</Moment></p></Link>
                </div>
                <p className="text-lg text-black/90 dark:text-lightGray font-bold leading-5 my-1.5">{blog.title}</p>
                <span className="text-sm">{blog.createdAt}</span>
            </div>

        </section>
     );
}
 
export default TrendingCard;