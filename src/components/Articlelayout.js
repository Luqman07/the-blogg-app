import Editorcarddetail from "./Editorcarddetail";

const Articlelayout = ({image}) => {
    return ( 
        <section className="container mx-auto px-4 md:px-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4">
                <div>
                    <h3 className="mb-4">Latest Article</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Editorcarddetail image={image}/>
                        <Editorcarddetail image={image}/>
                    </div>
                </div>
                <div>
                    <h3 className="mb-4">Popular Article</h3>
                    <Editorcarddetail image={image}/>
                </div>
            </div>
        </section>
     );
}
 
export default Articlelayout;