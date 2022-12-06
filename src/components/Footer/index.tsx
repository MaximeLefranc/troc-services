import { Link } from 'react-router-dom';
import './styles.scss';

function Footer(): JSX.Element {
  return (
    <div className="footer">
      <Link to="/a-propos">A propos</Link>
    </div>
  );
}

export default Footer;
