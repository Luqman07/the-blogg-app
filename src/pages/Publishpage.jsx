import { useEffect, useState, useContext } from "react";
import { setDoc, doc,  serverTimestamp } from "firebase/firestore"; 
import { db } from "../firebase";
import { AuthContext } from "../context/authContext";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

const Publishpage = ({handlePublish, data, setData}) => {
    const [snippet, setSnippet] = useState('')
    const [topic, setTopic] = useState('')
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const [canPublish, setCanPublish] = useState(true) 

    const validation = () => {
        if (snippet && topic) {
            setCanPublish(false)
        }
    }
    const handlePost = async (e) => {
        e.preventDefault()
        console.log(user.uid);
        let generatedId = uuidv4()
        try{
            const blogPost = {
                ...data,
                like: {
                    likedUsers: []
                },
                bookmarkUsers: {
                    bookmarkedList: []
                },
                blogId: generatedId,
                isTrending: false, 
                userPost: {
                    uid: user.uid,
                    displayName: user.displayName,
                    userProfileUrl: user.photoURL,
                    email: user.email
                },
                timeStamp: serverTimestamp()
            }
            setData({...data, snippet})
            const res = await setDoc(doc(db, "blogs", generatedId), blogPost);
            navigate('/')
        }catch(err){
            console.error(err);
        }
    }
    useEffect(() => {
       setData(data =>  ({...data, snippet, topic}))
       validation()
    },[setData ,snippet, topic])
    return ( 
        <section className="container mx-auto px-4 md:px-16 min-h-screen flex justify-center items-center">
            <span onClick={handlePublish} className="fixed right-48 top-10">
                Close
            </span>
            <form onSubmit={handlePost} className="flex flex-col gap-x-20 w-full md:flex-row">
                <section className="basis-1/2">
                    <h4 className="font-semibold mb-5">Blog-preview</h4>
                    {data.img && <div className="box w-full h-48 overflow-hidden text-white mb-5 flex items-center justify-center">
                        {/* {console.log(data.img)} */}
                        <img src={data.img} alt="post snapshot"/>
                    </div>}
                    <div className="mx-auto mb-3 ">
                        <input className="w-full h-10 border-b border-black/50 outline-none rounded px-2 dark:text-dark-mode" 
                        disabled
                        value={data.title} 
                        type="text" placeholder="New Title"/>
                    </div>
                    <div className="mx-auto mb-3 ">
                        <input className="w-full h-10 border-b border-black/50 outline-none rounded px-2 dark:text-dark-mode" 
                        onChange={(e) => setSnippet(e.target.value)}
                        onKeyDown={validation}
                        value={snippet}
                        type="text" placeholder="Blog snippet"/>
                    </div>
                </section>
                <section className="basis-1/2">
                    <h4 className="font-semibold mb-5">Publishing to: Luqman</h4>
                    <p>Add a topic</p>
                    <select onChange={(e) => {setTopic(e.target.value)}} name="" className="w-full h-10 border border-black/50 mb-5 outline-none rounded px-2 dark:text-dark-mode">
                        <option value="">Choose a topic</option>
                        <option value="Sport">Sport</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Fashion">Fashion</option>
                    </select>
                    <button disabled={canPublish} className="px-4 py-0.5 text-white rounded-full cursor-pointer bg-blue inline-block mr-2">Publish</button>
                </section>
            </form>

        </section>
     );
}
 
export default Publishpage;