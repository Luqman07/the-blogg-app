import { useState } from "react";
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleHome = ()=>{
        navigate("/")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(email === "" || password === ""){
            setError('Fields required')
            return
        }
        if(password.length < 6){
            setError('Password should be at least 6 characters long')
            return
        }
        try{
            const {user} = await signInWithEmailAndPassword(auth, email, password)

            dispatch({type: 'LOGIN', payload: user})
            localStorage.setItem('user', user)
            navigate("/")
        }catch(err){
            setError(err.errorCode)
            console.log(err);
        }
    }


    return ( 
        <form onSubmit={handleSubmit} className="rounded-lg py-5 px-9 bg-darkBackground text-grey dark:bg-darkBackground dark:text-grey">
            <h4 className="text-center font-semibold mb-5 text-3xl">Login</h4>
            <div className="mb-3">
                <label htmlFor="" className="block mb-1">Email</label>
                <input 
                className="w-full outline-none h-9 rounded px-2 text-black dark:text-dark-mode" 
                onChange={e => setEmail(e.target.value)} 
                value={email} 
                type="email" 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="mb-1 block">Password</label>
                <input className="w-full outline-none h-9 rounded px-2 text-black dark:text-dark-mode" 
                onChange={e => setPassword(e.target.value)} 
                value={password} 
                type="password"
                />
            </div>
            <div className="text-center">
                <button className="hover:bg-dark-mode hover:text-grey transition-all border w-1/3 py-1 rounded">Login</button>
            </div>
            <p className="text-red">{error}</p>

            <button className="fixed top-10 left-4 bg-gray-dark p-3 font-semibold rounded" onClick={handleHome}>Home</button>
        </form>
     );
}
 
export default LoginForm;