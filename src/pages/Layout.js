import {Link} from "react-router-dom";
import './Layout.css';

const Layout = () => {
  return (
    <nav className="app_nav">
      <ul className="nav-link">
          
        <li>
            <Link to="/"> Home </Link>
        </li>
          
        <li>
          <Link to="/customer">
          <button type="button" className="custom__button"> Customer </button> 
          </Link>
    
          <Link to="/restauranteur">
          <button type="button" className="custom__button"> Restaurateur </button> 
          </Link>
        </li>

      </ul>
    </nav>
  )
};

export default Layout;
