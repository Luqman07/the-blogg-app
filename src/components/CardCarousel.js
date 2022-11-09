import Moment from "react-moment";
import { dateFormatter } from "../utils";

const CardCarousel = ({ blog }) => {
    
    return ( 
        <div className="relative">
            <img src={blog.img} className="block w-[100%] h-[420px] object-cover" alt="" />
            <div className="bg-black/60 flex flex-col justify-center text-center text-white w-[100%] h-[100%] absolute top-0 left-0 z-10 ">
                <h5 className='mb-4 uppercase text-sm tracking-wider'>{blog.topic}</h5>
                <h2 className='mb-4 w-[80%] mx-auto font-bold'>{blog.title}</h2>
                <h6 className="font-light text-xs">{blog.userPost.displayName} - {<Moment fromNow>{dateFormatter(blog.timeStamp.seconds)}</Moment>}</h6>
            </div>
        </div>
     );
}
 
export default CardCarousel;