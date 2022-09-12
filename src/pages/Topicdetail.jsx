import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { blogs } from "../utils";


const Topicdetailpage = () => {
    const { topic } = useParams()
    // const che
    const topicCategory = blogs.filter(blog => blog.category.toLowerCase() === topic )
    console.log(topicCategory);
    return ( 
        <section>
            <h1>Topic : { topic }</h1>
            {
                topicCategory.map((topic, id) => <BlogCard blog={topic} key={topic.id} id={id}/>)
            }
        </section>
     );
}
 
export default Topicdetailpage;