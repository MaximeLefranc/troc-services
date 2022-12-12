import { Link } from 'react-router-dom';
import './styles.scss';

function MobileDropdown() {
  return (
    <li className="navMobile__dropdown ">
      <span className="navMobile__dropbtn">Bricolage</span>
      <div className="navMobile__dropdown--content ">
        <Link className="navMobile__dropdown--link" to="#">
          Link 1
        </Link>
        <Link className="navMobile__dropdown--link" to="#">
          Link 2
        </Link>
        <Link className="navMobile__dropdown--link" to="#">
          Link 3
        </Link>
      </div>
    </li>
  );
}

export default MobileDropdown;
