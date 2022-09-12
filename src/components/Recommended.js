import Pills from "./Pills";
import { topics } from "../utils";
const Recommended = () => {
    return ( 
        <section>
            <h3 className="font-semibold mb-3">Recommended topics</h3>
            { topics.map((topic, index) => <Pills topic={topic} key={index}/>) }
        </section>
     );
}
 
export default Recommended;