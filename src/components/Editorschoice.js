import Editorcarddetail from './Editorcarddetail';

const Editorschoice = ({image}) => {
    return ( 
       <div className="w-full py-6">
        <h4 className="container mx-auto px-4 md:px-16 tracking-wide mb-4 font-semibold ">Editors Choice</h4>
        <div className="container mx-auto grid px-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 md:px-16 dark:text-grey">
          <Editorcarddetail className="" image={image}/>
          <Editorcarddetail className="" image={image}/>
          <Editorcarddetail className="" image={image}/>
          <Editorcarddetail className="" image={image}/>
        </div>
       </div>
     );
}
 
export default Editorschoice;