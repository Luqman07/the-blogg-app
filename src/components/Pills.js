import { Link } from "react-router-dom"

const Pills = ({topic}) => {
    return ( 
            <>
                <Link to={`/topic/${topic}`}><span className=" px-3 text-black/90 py-0.5 rounded-full cursor-pointer bg-lightGray inline-block mr-2 mb-2">{topic}</span></Link>
            </>
    
     );
}
 
export default Pills;
