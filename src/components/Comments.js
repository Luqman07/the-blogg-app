import { useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { collection, query, where, getDocs, setDoc, doc,  serverTimestamp } from "firebase/firestore"; 
import { db } from "../firebase";
import { AuthContext } from "../context/authContext";
import { useEffect } from "react";
// import { LogicContext } from "../context/logicContext";



const Comment = ({ blog, setComments, comments }) => {
    const [content, setContent] = useState('')
    const {user} = useContext(AuthContext)
    // const { fetchPost } = useContext(LogicContext)
    const [use, setUse] = useState([])
    // console.log(blog)
    const handlePostComment = async () => {
        if(content === '') return
        setContent('')
        let generatedId = uuidv4()
        try{
            const commentPost = {
                blogId: blog.blogId,
                content,
                commentId: generatedId,
                userId: user.uid,
                displayName: user.displayName,
                dp: use.profileUrl,
                timeStamp: new Date(),
            }
            console.log(serverTimestamp().seconds);
            setComments([...comments, commentPost])
            await setDoc(doc(db, "comments", generatedId), commentPost);
            
        }catch(err){
            console.error(err);
        }

    }

    useEffect(() => {
        const fetchUser =  async (ref, id) => {
            try{
                const q = query(collection(db, "users"), where(ref, "==", id));
                const querySnapshot = await getDocs(q);
                
                // let list = [];
                querySnapshot.forEach((doc) => {
                // list.push(doc.data())
                setUse(doc.data())
            }); 
        }catch(e){
            console.log(e);
        }
        
    }
    fetchUser('id', user.uid)
    }, [])

    return ( 
        <section className="flex mb-10">
             <div className="flex-grow">
                {/* <label htmlFor="" className="block mb-1">Write a comment</label> */}
                <input 
                className="w-full border border-darkBackground outline-none h-9 rounded px-2 text-black dark:text-dark-mode" 
                onChange={e => setContent(e.target.value)} 
                value={content} 
                type="comment" 
                placeholder="Write a comment"
                />
            </div>
            <button onClick={handlePostComment} className="px-4 py-0.5 ml-2 text-white rounded cursor-pointer bg-dark-mode inline-block mr-2 outline-hidden dark:bg-darkBackground">Post</button>
        </section>
     );
}
 
export default Comment;