import { useParams } from "react-router-dom";
// import { blogs } from "../utils"
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db } from "../firebase";
import { useState, useEffect } from "react";

const Blogdetailpage = () => {
    const { id } = useParams()
    // const [blog, setBlog] = useState(null)
    
    useEffect(()=>{
        // This function is getting the logged in user blogs from firebase 
        // const fetchBlog = async () => {
        //     const q = query(collection(db, "blogs"), where("id", "==", id));
        //     const querySnapshot = await getDocs(q);
            
        //     let list = []
        //     querySnapshot.forEach((doc) => {
        //       console.log()
        //       list.push({docId:doc.id, ...doc.data()})
        //     });  
        //     const filteredBlog = list.filter(blog => blog.docId === id)  
        // }
        // fetchBlog()
         
    }, [id])
    
    // console.log(blog);  
    return ( 
        <section className="container mx-auto px-4 md:px-16">
            <h1>Blog detail {id}</h1>
            {/* <h1>{blog?.title}</h1>
            <h1>{blog?.displayName}</h1>
            <h1>{blog?.detail}</h1> */}
        </section>
     );
}
 
export default Blogdetailpage;