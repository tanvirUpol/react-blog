import {Link} from 'react-router-dom';



// styles
import './Navbar.css'



const Navbar = () => {



  return (
    <div className='navbar'>

      <nav>
        <Link to="/" className='brand'>
          <h1>Nature Blog</h1>
        </Link>
        <Link to="/create">Create Blog</Link>
      </nav>

    </div>
  )
}
export default Navbar