import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { LogicContext } from "../context/logicContext";
import { useNavigate } from "react-router-dom";
// import { updateProfile } from "firebase/auth";
// import { auth } from '../firebase'
// import { doc, setDoc, serverTimestamp } from "firebase/firestore"; 
// import { db } from "../firebase";


const SignupForm = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const { dispatch } = useContext(AuthContext)
    const { signUp } = useContext(LogicContext)
    
    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setError('')
        if(email === "" || password === "" || email === "" || confirmPassword === ""){
            setError('Fields required')
            return
        }
        if(!password === confirmPassword){
            setError('Passwords do not match')
            return
        }
        if(password.length < 6){
            setError('Password should be at least 6 characters long')
            return
        }
        
       try{
        const {signUpUser, signUpError} = await signUp(fullName, email, password)
        console.log(signUpError);
        if(signUpUser){
            console.log(signUpUser)
            dispatch({type: 'LOGIN', payload: signUpUser})
            navigate('/home')
            return
        }
       }catch(e){
           setError(e)
           console.log(e);
       }
        // setFullName('')
        // setEmail('')
        // setPassword('')
        // setConfirmPassword('')
    }
    return ( 
        <form onSubmit={handleSubmit} className="rounded-lg py-5 px-9 bg-darkBackground text-grey dark:bg-darkBackground dark:text-grey">
            <h4 className="text-center font-semibold mb-5 text-3xl">Signup</h4>
             
            <div className="mb-3">
                <label htmlFor="" className="block mb-1">Full Name</label>
                <input className="w-full outline-none h-9 rounded px-2 text-black dark:text-dark-mode" 
                onChange={e => setFullName(e.target.value)} 
                value={fullName}
                type="text" />
            </div>
            <div className="mb-3">
                <label htmlFor="" className="block mb-1">Email</label>
                <input className="w-full outline-none h-9 rounded px-2 text-black dark:text-dark-mode" 
                onChange={e => setEmail(e.target.value)} 
                value={email}
                type="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="mb-1 block">Password</label>
                <input className="w-full outline-none h-9 rounded px-2 text-black dark:text-dark-mode" 
                onChange={e => setPassword(e.target.value)} 
                value={password}
                type="password"/>
            </div>
            
            <div className="mb-3">
                <label htmlFor="password" className="mb-1 block">Confirm Password</label>
                <input className="w-full outline-none h-9 rounded px-2 text-black dark:text-dark-mode" 
                onChange={e => setConfirmPassword(e.target.value)} 
                value={confirmPassword}
                type="password"/>
            </div>
            
            <div className="text-center">
                <button className="hover:bg-dark-mode hover:text-grey transition-all border w-1/3 py-1 rounded">Submit</button>
            </div>
            
            {" "}
            <p>mail: {email}</p>
            <p>User password: {password}</p>
            {error && <p>{error}</p>}
        </form>
     );
}
 
export default SignupForm;