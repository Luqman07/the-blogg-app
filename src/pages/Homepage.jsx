import Slidersection from "../components/Slider";
import Trending from "../components/Trending";
import BlogLists from "../components/BlogLists";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const Homepage = () => {
    const [blogs, setBlogs] = useState([])
    const [error, setError] = useState('')
    useEffect(()=>{
        const fetchAllData = async () => {
            try{
                const q = query(collection(db, "blogs"), orderBy("timeStamp", "desc"));
                const querySnapshot = await getDocs(q);
                let list = []
                querySnapshot.forEach((doc) => {
                    list.push(doc.data())
                });  
                setBlogs(list)
                // setPost(list)
                if(list.length === 0) {
                    console.log(list.length);
                    throw new Error('No blog')
                }
           }catch(e){
                console.log(e);
                setError(e)
           }
          
        }
        fetchAllData() 
    },[])
    return ( 
        <section className="mt-14">
            <Navbar/>
            <Slidersection blogs={blogs}/>
            <Trending blogs={blogs} error={error}/>
            <hr className="text-lightGray"/>
            <BlogLists blogs={blogs} error={error}/>
        </section>
     );
}
 
export default Homepage;