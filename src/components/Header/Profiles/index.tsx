/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.scss';
import logoUser from './../../../assets/icons/user.png';
import logoEnvelopet from './../../../assets/icons/envelope.png';
import logoLogout from './../../../assets/icons/log-out.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../../../reducers';
import { actionLogOut } from '../../../actions/user';

function Profiles(): JSX.Element {
  const pseudo: string = useSelector((state: GlobalState) => state.user.pseudo);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(actionLogOut());
  };
  const menuToggle = () => {
    const toggleMenu: any = document.querySelector('.profiles__menu');
    const toggleProfile: any = document.querySelector('.profile img');
    toggleProfile.classList.toggle('isActive');
    toggleMenu.classList.toggle('active');
  };
  return (
    <div className="action">
      <div className="profile" onClick={menuToggle}>
        <img src={logoUser} />
      </div>
      <div className="profiles__menu">
        <h3>
          {pseudo}
          <br />
          <span>Mon compte</span>
        </h3>
        <ul className="profiles__menu__links">
          <Link to={'#'} className="profiles__menu--link">
            <img src={logoUser} />
            <span className="profiles__menu__link--span">Mon profil</span>
          </Link>
          <Link to={'#'} className="profiles__menu--link">
            <img src={logoEnvelopet} />
            <span className="profiles__menu__link--span">Mes messages</span>
          </Link>
          <Link to={'#'} className="profiles__menu--link">
            <img src={logoLogout} />
            <span className="profiles__menu__link--span" onClick={logOut}>
              Déconnexion
            </span>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Profiles;
