const Editorcarddetail = ({image}) => {
    return ( 
        <div className="">
            <div className="overflow-hidden h-40">
                <img src={image} className="w-[100%] object-center"  alt="" />
            </div>
            <div className="">
                <h4 className="mt-3 mb-1 leading-6 font-bold tracking-tight">The Best Place to Travel in the United States</h4>
                <span className="font-light text-xs">Jane Doe - February 23, 2022</span>
            </div>
        </div>
     );
}
 
export default Editorcarddetail;