import LeftSidebar from "../components/LeftSidebar";
import Maincontent from "../components/Maincontent";

const Homeauthpage = ({ likeCount, setLikeCount }) => {
    
    return ( 
        <main className="">
            <LeftSidebar/>
            <Maincontent likeCount={likeCount} setLikeCount={setLikeCount}/>
        </main>
    );
}
 
export default Homeauthpage;