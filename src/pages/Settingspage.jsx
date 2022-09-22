import { useState, useEffect } from "react";
import { FaCamera, FaUser } from 'react-icons/fa';
import Toggletheme from "../components/Toggletheme";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const Settingspage = () => {
    const [navbar, setNavbar] = useState(false);
    const [nameBool, setNameBool] = useState(false)
    const [bioBool, setBioBool] = useState(false)
    const [aboutBool, setAboutBool] = useState(false)
    const [deleteBool, setDeleteBool] = useState(false)
    const [emailBool, setEmailBool] = useState(false)
    const [currUser, setCurrUser] = useState('')
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [about, setAbout] = useState('')
    const [profileUrl, setProfileUrl] = useState('')
    const [email, setEmail] = useState('')
    const [file, setFile] = useState(null)
    const {user} = useContext(AuthContext)

    const editUserField = (fn) => fn(true)
    
    const updateUser = async (fn=null, field, data) => {
        try{
            const nameRef = doc(db, "users", user.uid);
            // Set the "fullName" field of the logged in user 
            await updateDoc(nameRef, {
            [`${field}`]: data
            });
            console.log('Update done');
            fn(false)
        }catch(e){
            console.log(e);
        }
    }
    // const replaceUploadChar = str => str.replaceAll('/', '+')
    // const replaceDownChar = str => str.replaceAll('+','/')

    useEffect(()=>{
        const fetchCurrUser = async () => {
            const q = query(collection(db, "users"), where("id", "==", user.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              setCurrUser(doc.data())
              setName(doc.data().fullName)  
              setBio(doc.data().bio)  
              setEmail(doc.data().email)  
              setAbout(doc.data().about)  
              setProfileUrl(doc.data().photoUrl)  
            });
            // console.log(name, currUser)
        }
        fetchCurrUser()
    }, [user.uid])
    useEffect(() =>{
        const storage = getStorage();
        const uploadImage = () => {
            const storageRef = ref(storage, 'profile_pictures/' + file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);
    
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
                    console.log('File:', downloadURL);
                    setProfileUrl(downloadURL)
                    // console.log(typeof(downloadURL), downloadURL,'-', profileUrl );
                    updateUser('profileUrl', downloadURL.toString())
                    console.log(downloadURL.toString());
                });
            }
            );
        }

        file && uploadImage()
    },[file])
    
    return ( 
        <div>
            <nav className="w-full fixed top-0 z-40 bg-white dark:bg-dark-mode shadow-md">
                <div className="container justify-between px-4 py-3 mx-auto sm:items-center sm:flex md:px-16">
                <div>
                    <div className="flex items-center justify-between">
                    <span to={"/"}>
                        <h2 className="text-2xl font-bold">LOGO</h2>
                    </span>
                    <div className="sm:hidden">
                        <button
                            className="py-2 text-gray-700 rounded-md outline-none"
                            onClick={() => {setNavbar(!navbar)}}
                        >
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.4}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    </div>
                </div>
                <div className="items-center sm:flex">
                    {/* <div
                    className={`flex-1 justify-self-center pb-3 mt-8 sm:block sm:pb-0 sm:mt-0 transition-all ${
                        navbar ? "block" : "hidden"
                    }`}
                    >
                        <ul className="items-center justify-center space-y-8 sm:flex sm:space-x-6 sm:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <a className={({isActive}) => 
                                isActive ? "font-bold" : undefined
                            } to={"/"}>Home</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a className={({isActive}) => 
                                isActive ? "font-bold" : undefined
                            } to={"/blog"}>Blog</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a className={({isActive}) => 
                                isActive ? "font-bold" : undefined
                            } to={"/about-us"}>About Us</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a to={"/"}>Contact US</a>
                            </li>
                            

                        </ul>
                    </div> */}
                    
                </div>
                <div className={`mt-8 sm:flex sm:items-center sm:pb-1 sm:mt-0 ${navbar ? "block" : "hidden"}`}>
                    {/* <a to={"/login"} className="border hover:bg-dark-mode hover:text-white transition-all bg-red-400 outline-none px-4 py-1 mr-3 rounded-md">Login</a> */}
                    <button className="block mt-4 mr-3 sm:mt-0"><FaUser/></button>
                    <Toggletheme/>
                    </div>
                </div>
            </nav>
            {
                currUser &&
                <div className="container mx-auto flex pt-28 px-4 md:px-16">
                    <aside className="basis-1/4 hidden md:block self-start sticky top-20">
                        <h3 className="mb-7 text-2xl font-semibold">Settings</h3>
                        <ul>
                            <li className="mb-6 text-xl"><span>About you</span></li>
                            <li className="mb-6 text-xl"><span>Email settings</span></li>
                            <li className="mb-6 text-xl"><span>Security</span></li>
                        </ul>
                    </aside>
                    <main className="basis-full md:basis-3/4 ">
                        <h2 className="text-2xl mb-3 font-semibold">About you</h2>
                        <hr className="text-grey mb-8"/>
                        <div className="flex items-center justify-between mb-5">
                            <div className="mt-3 basis-1/2 ">
                                <label className="font-semibold text-lg">Name</label>
                                <input className="w-full h-10 border-b mt-2 mb-5 border-grey outline-none dark:text-white dark:bg-dark-mode" 
                                type="text"
                                disabled={!nameBool}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"/>
                                <p className="text-sm leading-4">Your name appears on your Profile page, as your byline, and in your responses. It is a required field.</p>
                            </div>
                            <div className="btn basis-1/3 text-end">
                                {nameBool ? <>
                                <button className="border rounded-full px-5 py-2 mr-2 border-red" onClick={(e) => updateUser(setNameBool, 'fullName', name)}>Save</button> 
                                <button className="border border-lightGray rounded-full px-5 py-2 hover:border-gray transition">Cancel</button></> : 
                                <button className="border border-lightGray rounded-full px-5 py-2 hover:border-gray transition" onClick={() => editUserField(setNameBool)}>Edit</button>}       
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-5">
                            <div className="mt-3 basis-1/2 ">
                                <label className="font-semibold text-lg">Short Bio</label>
                                <input className="w-full h-10 border-b mt-2 mb-5 border-grey outline-none dark:text-white dark:bg-dark-mode" 
                                type="text"
                                disabled={!bioBool}
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                placeholder="Bio"/>
                                <p className="text-sm leading-4">Your short bio appears on your Profile and next to your stories. Max 160 characters.</p>
                            </div>
                            <div className="btn basis-1/3 text-end">
                                {bioBool ? <>
                                <button className="border rounded-full px-5 py-2 mr-2 border-pink" onClick={(e) => updateUser(setBioBool, 'bio', bio)}>Save</button> 
                                <button className="border border-lightGray rounded-full px-5 py-2 hover:border-gray transition">Cancel</button></> : 
                                <button className="border border-lightGray rounded-full px-5 py-2 hover:border-gray transition" onClick={() => editUserField(setBioBool)}>Edit</button>}       
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-5">
                            <div className="mt-3 basis-1/2 ">
                                <label className="font-semibold text-lg">Photo</label>
                                <p className="text-sm leading-4 mb-3">Your photo appears on your Profile page and with your stories across Medium.</p>
                                <p className="text-sm leading-4">Recommended size: Square, at least 1000 pixels per side. File type: JPG, PNG or GIF.</p>
                            </div>
                            <div className="btn basis-1/3 text-end relative">
                                <section className="w-32 h-32 rounded-full relative overflow-hidden">
                                    <img className="border w-full h-full" src={profileUrl} alt="profile" />
                                </section>
                                <label className="cursor-pointer ">
                                        <FaCamera size={35} className="absolute text-black/50 left-[22%] top-[41%]"/>
                                        <input type="file"  className="hidden" onChange={e => setFile(e.target.files[0])}  accept="image/png, image/jpg, image/gif, image/jpeg"/>
                                </label>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-5">
                            <div className="mt-3 basis-1/2 ">
                                <label className="font-semibold text-lg">About</label>
                                <input className="w-full h-10 border-b mt-2 mb-5 border-grey outline-none dark:text-white dark:bg-dark-mode" 
                                type="text"
                                disabled={!aboutBool}
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                                placeholder="About me"/>
                                <p className="text-sm leading-4">About me</p>
                            </div>
                            <div className="btn basis-1/3 text-end">
                                {aboutBool ? <>
                                <button className="border rounded-full px-5 py-2 mr-2 border-red" onClick={(e) => updateUser(setAboutBool, 'about', about)}>Save</button> 
                                <button className="border border-lightGray rounded-full px-5 py-2 hover:border-gray transition">Cancel</button>
                                </> : <button className="border border-lightGray rounded-full px-5 py-2 hover:border-gray transition" onClick={() => editUserField(setAboutBool)}>Edit</button>}       
                            </div>
                        </div>
                        <h2 className="text-2xl mb-3 font-semibold" id="email">Email Settings</h2>
                        <hr className="text-grey mb-8"/>
                        <div className="flex items-center justify-between mb-5">
                            <div className="mt-3 basis-1/2 ">
                                <label className="font-semibold text-lg">Your Email</label>
                                <input className="w-full h-10 border-b mt-2 mb-5 border-grey outline-none dark:text-white dark:bg-dark-mode" 
                                type="text"
                                disabled={!emailBool}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"/>
                            </div>
                            <div className="btn basis-1/3 text-end">
                                {emailBool ? <>
                                <button className="border rounded-full px-5 py-2 mr-2 border-red" onClick={(e) => updateUser(setEmailBool, 'email', email)}>Save</button> 
                                <button className="border border-lightGray rounded-full px-5 py-2 hover:border-gray transition">Cancel</button>
                                </> : <button className="border border-lightGray rounded-full px-5 py-2 hover:border-gray transition" onClick={() => editUserField(setEmailBool)}>Edit email</button>}       
                            </div>
                        </div>
                        <h2 className="text-2xl mb-3 font-semibold" id="security">Security</h2>
                        <hr className="text-grey mb-8"/>
                        <div className="flex items-center justify-between mb-5">
                            <div className="mt-3 basis-1/2 ">
                                <label className="font-semibold text-lg">Delete Account</label>
                                <p className="text-sm leading-4">This will Delete the users account permanently</p>
                            </div>
                            <div className="btn basis-1/3 text-end">
                                {deleteBool ? <>
                                <button className="border rounded-full px-5 py-2 mr-2 border-red" onClick={(e) => updateUser(setAboutBool)}>Yes</button> 
                                <button className="border border-lightGray rounded-full px-5 py-2 hover:border-gray transition">No</button>
                                </> : <button className="border border-pink rounded-full px-5 py-2 hover:border-gray transition" onClick={() => editUserField(setDeleteBool)}>Delete</button>}       
                            </div>
                        </div>
                    </main>
                </div>
            }
        </div>
     );
}
 
export default Settingspage;