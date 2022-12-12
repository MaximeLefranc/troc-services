import { Link } from 'react-router-dom';
import './styles.scss';

function NavDropdown({ categoryName }: { categoryName: string }) {
  return (
    <li className="nav__dropdown">
      <span className="nav__dropbtn">{categoryName}</span>
      <div className="nav__dropdown--content">
        <Link className="nav__dropdown--link" to="#">
          Link 1
        </Link>
        <Link className="nav__dropdown--link" to="#">
          Link 2
        </Link>
        <Link className="nav__dropdown--link" to="#">
          Link 3
        </Link>
      </div>
    </li>
  );
}

export default NavDropdown;
