const Form = ({heading}) => {
    return ( 
        <form className="rounded-lg py-5 px-9 bg-darkBackground text-grey dark:bg-darkBackground dark:text-grey">
            <h4 className="text-center font-semibold mb-5 text-3xl">{heading}</h4>
            {heading === "Signup" && 
                <div className="mb-3">
                    <label htmlFor="" className="block mb-1">Full Name</label>
                    <input className="w-full outline-none h-9 rounded px-2 dark:text-dark-mode" type="text" />
                </div>
            }
            <div className="mb-3">
                <label htmlFor="" className="block mb-1">Email</label>
                <input className="w-full outline-none h-9 rounded px-2 dark:text-dark-mode" type="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="mb-1 block">Password</label>
                <input className="w-full outline-none h-9 rounded px-2 dark:text-dark-mode" type="password"/>
            </div>
            {heading === "Signup" &&
            <div className="mb-3">
                <label htmlFor="password" className="mb-1 block">Confirm Password</label>
                <input className="w-full outline-none h-9 rounded px-2 dark:text-dark-mode" type="password"/>
            </div>
            }
            <div className="text-center">
                <button className="hover:bg-dark-mode hover:text-grey transition-all border w-1/3 py-1 rounded">{heading}</button>
            </div>
        </form>
     );
}
 
export default Form;