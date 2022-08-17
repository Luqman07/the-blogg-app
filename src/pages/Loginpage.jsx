import { Link } from "react-router-dom";
import Form from "../components/Form";
const Loginpage = () => {
    return ( 
        <section className="flex justify-center items-center min-h-screen">
            <div className="basis-11/12 sm:basis-3/4 md:basis-2/3 lg:basis-1/3">
                <Form heading={'Login'}/>
                <p className="text-center mt-4">Already have an account? <Link className="underline" to={'/signup'}>Signup</Link></p>
            </div>
             
        </section>
     );
}
 
export default Loginpage;