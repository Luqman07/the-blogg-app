import LeftSidebar from "../components/LeftSidebar"
import Userblogs from "../components/Userblogs"
import {useParams} from "react-router-dom"
const Userpage = () => {
    const {user} = useParams()
    console.log(user);
    return(
        <section>
            <LeftSidebar />
            <Userblogs userProp={user.split(" ")[0]} userInfo={user}/>
        </section>
    )
}

export default Userpage