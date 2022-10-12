import LeftSidebar from "../components/LeftSidebar"
import Userblogs from "../components/Userblogs"
import {useParams} from "react-router-dom"
const Userpage = () => {
    const {userId} = useParams()
    console.log(userId);
    return(
        <section>
            <LeftSidebar />
            <Userblogs userInfo={userId}/>
        </section>
    )
}

export default Userpage