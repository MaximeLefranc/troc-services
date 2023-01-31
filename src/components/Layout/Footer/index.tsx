// ---- React Import ----
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// ---- TypeScript Import ----
import { GlobalState } from '../../../reducers';

// ---- Utils Import ----
import { getUrlApi } from '../../../utils/utils';

// ---- Styles Import ----
import './styles.scss';

function Footer(): JSX.Element {
  const urlAPI = getUrlApi();
  const admin = useSelector((state: GlobalState) => state.user.admin);
  return (
    <div className="footer">
      {admin && (
        <a className="footer__link" href={urlAPI} target="_blank">
          Back-Office
        </a>
      )}
      <Link className="footer__link" to="/a-propos">
        A propos
      </Link>
    </div>
  );
}

export default Footer;
