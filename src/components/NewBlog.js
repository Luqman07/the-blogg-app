import { useEffect, useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Publishpage from "../pages/Publishpage";
import Toggletheme from "./Toggletheme"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AuthContext } from "../context/authContext";


const NewBlog = () => {
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)
    const [data, setData] = useState({})
    const [published, isPublished] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const {user} = useContext(AuthContext)

    const handlePublish = () => {
        isPublished(!published)
        setData(prevData => ({...prevData, title, description}))
        console.log(data, title, description);
    }
    
    const validation = () => {
        if (title && description && file) {
            setIsLoading(false)
        }
    }
    useEffect(() =>{
        const storage = getStorage();
        const uploadImage = () => {
            const storageRef = ref(storage, 'images/' + file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);
            setIsLoading(true)
    
            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break;        
                }
            }, 
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;
                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                    default:
                        break;
                }
            }, 
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setData((prev) => ({...prev, img: downloadURL}))
                });
            }
            );
        }

        file && uploadImage()
        file && validation()
    },[file])
    
    
   const mobile = (para) => para.split(' ')[0]

    return ( 
        <div>
            <section className={published ? "hidden" : "container mx-auto" }>
            <header className="flex justify-between items-center h-20 px-4 md:px-16">
                <div className="logo flex items-center ">
                    <h2>LOGO</h2>
                    <p className="ml-4 text-sm md:text-lg">Draft in <span className="block md:hidden">{mobile(user.displayName)}</span><span className="hidden md:block">{user.displayName }</span></p>
                </div>
                <div className="flex items-center gap-x-1 sm:gap-x-4">
                    <button onClick={handlePublish} disabled={isLoading} className="px-4 py-0.5 text-white rounded-full cursor-pointer bg-blue inline-block mr-2">Publish</button>
                    <FaUserCircle size={27}/>
                    <span className="hidden sm:block"><Toggletheme  /></span>
                </div>

            </header>

            <form className="px-5">
                <div className=" max-w-4xl mx-auto mb-10 ">
                    <input className="w-full h-20 border-0 border-b border-black/20 outline-none text-2xl rounded px-2 dark:text-dark-mode" 
                    onChange={e => setTitle(e.target.value) }
                    onKeyDown={validation}
                    value={title} 
                    type="text" 
                    placeholder="Title"/>
                </div>
                <div className=" max-w-4xl mx-auto mb-10">
                    <textarea className="w-full h-32 border-0 border-b rounded border-black/30 outline-none text-xl px-2 dark:text-dark-mode" 
                    onChange={e => setDescription(e.target.value)}
                    onKeyDown={validation}
                    value={description}
                    type="text" 
                    placeholder="Write"></textarea>
                </div>
                <div className=" max-w-4xl mx-auto ">
                    <input type="file" name="" onChange={(e) => {setFile(e.target.files[0]);}} />
                </div>
            </form>
           
        </section>
         {published ? <Publishpage handlePublish={handlePublish} data={data} setData={setData}/> : null}
        </div>
     );
}
 
export default NewBlog;