
const CardCarousel = ({ image }) => {
    return ( 
        <div className="relative">
            <img src={image} className="block w-[100%] h-[420px] object-cover" alt="" />
            <div className="bg-black/60 flex flex-col justify-center text-center text-white w-[100%] h-[100%] absolute top-0 left-0 z-10 ">
                <h5 className='mb-4 uppercase text-sm tracking-wider'>Athletics</h5>
                <h2 className='mb-4 w-[80%] mx-auto font-bold'>The best place to travel in the United States</h2>
                <h6 className="font-light text-xs">Jane Doe - February 23, 2022</h6>
            </div>
        </div>
     );
}
 
export default CardCarousel;