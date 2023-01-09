
import {Link} from 'react-router-dom'
import { projectFirestore } from '../firebase/config'

// styles
import './BlogList.css'

const BlogList = ({blogs}) => {
 
  if(blogs.length === 0){
      
    return <div className='error'>No recipes found...</div>
  }
  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }
  
  
  return (

    <div className="blog-list">
      {blogs.map(blog => (
        <div key={blog.id} className="card">
          <h3 className='title'>{blog.title}</h3>
          <ul className='tags'>
                {blog.ingredients.map(ing =>(
                    <li key={ing}>{ing}</li>
                ))}
          </ul>
          <div>{blog.method.substring(0, 100)}...</div>
          <div className='btns'>
            <Link className='btn-read' to={`/blog/${blog.id}`}>Read More</Link>
            <a className='btn-delete' onClick={() => handleClick(blog.id)}>Delete</a>
          </div>
          
      
        </div>
      ))}
    </div>
    
  )
}
export default BlogList;