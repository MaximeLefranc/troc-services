import { Link } from 'react-router-dom';
import './styles.scss';

function Footer(): JSX.Element {
  return (
    <div className="footer">
      <Link className="footer__link" to="/a-propos">
        A propos
      </Link>
    </div>
  );
}

export default Footer;
