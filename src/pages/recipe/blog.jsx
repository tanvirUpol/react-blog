import {useEffect,useState} from "react";
import { useHistory,useParams } from "react-router-dom";
import {projectFirestore} from '../../firebase/config'



// styles
import './blog.css'

const Blog = () => {

    const {id} = useParams()
    // const [data,setData] = useState(null)
    const [blog,setRecipe] = useState(null)
    const [isPending,setIsPending] = useState(false)
    const [error,setError] = useState(false)

    useEffect(() => {
        setIsPending(true)
        projectFirestore.collection('recipes').doc(id).get().then((doc)=>{
            if(doc.exists){
                setIsPending(false)
                setRecipe(doc.data())
            } else {
                setIsPending(false)
                setError('No file found')
            }
        })
    }, [id]);


    const history = useHistory()

    useEffect(() => {
        if(error){
            setTimeout(() => {
                history.push('/')
            }, 2000);
        }
    }, [error,history]);

    

    return ( 
        <div className="blog">
            {isPending && <div className="loading">Loading...</div>}
            {error && <p className="error">{error}</p>}
            {blog && ( 
            <>
                <h2>{blog.title}</h2>
                <ul className="tags">
                    {blog.ingredients.map(ing =>(
                    <li key={ing}>{ing}</li>
                    ))}
                </ul>
                <p className="method">{blog.method}</p>

            </>
            )}
        </div>
     );
}
 
export default Blog;