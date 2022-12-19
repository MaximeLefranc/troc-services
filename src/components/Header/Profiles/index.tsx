/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.scss';
import logoUser from './../../../assets/icons/user.png';
import logoEnvelopet from './../../../assets/icons/envelope.png';
import logoLogout from './../../../assets/icons/log-out.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../../reducers';

function Profiles() {
  const pseudo: string = useSelector((state: GlobalState) => state.user.pseudo);
  const list: any = useSelector(
    (state: GlobalState) => state.user.listOfMembers
  );
  console.log(list);
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
            <span className="profiles__menu__link--span">Déconnexion</span>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Profiles;
