import {Link} from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

// styles
import './Navbar.css'




const Navbar = () => {
  const {color} = useTheme()


  return (
    <div className='navbar' style={{background: color}}>

      <nav >
        <Link to="/" className='brand'>
          <h1>Nature Blog</h1>
        </Link>
        <Link to="/create">Create Blog</Link>
      </nav>

    </div>
  )
}
export default Navbar