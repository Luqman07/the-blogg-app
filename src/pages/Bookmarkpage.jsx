import LeftSidebar from "../components/LeftSidebar"
import Userblogs from "../components/Userblogs"
import {useParams} from "react-router-dom"

const Bookmarkpage = () => {
    const {user} = useParams()
    console.log(user);

    return(
        <section>
            <LeftSidebar />
            <Userblogs userInfo={user}/>
        </section>
    )
}

export default Bookmarkpage;