/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.scss';
import logoUser from './../../../assets/icons/user.png';
import logoEnvelopet from './../../../assets/icons/envelope.png';
import logoLogout from './../../../assets/icons/log-out.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../../../reducers';
import { actionLogOut } from '../../../actions/user';
import { findMember } from '../../../selectors/members';
import { getUrlApi } from '../../../utils/utils';
import { User } from '../../Cards/ProfilesCards';
import Spinner from '../../Spinner';
import { haveMessagesNotRead } from '../../../selectors/messages';

function Profiles(): JSX.Element {
  const user: User | false = useSelector((state: GlobalState) =>
    findMember(state.user.listOfMembers, state.user.pseudo)
  );
  const messages = useSelector(
    (state: GlobalState) => state.messages.messagesUser
  );
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(actionLogOut());
  };
  const url = getUrlApi();
  const menuToggle = () => {
    const toggleMenu: any = document.querySelector('.profiles__menu');
    const toggleProfile: any = document.querySelector('.profile img');
    toggleProfile.classList.toggle('isActive');
    toggleMenu.classList.toggle('active');
  };

  const classNotificationImg = haveMessagesNotRead(messages)
    ? 'profile notif'
    : 'profile';
  const classNotificationLi = haveMessagesNotRead(messages)
    ? 'profiles__menu__link--span notif-li'
    : 'profiles__menu__link--span';

  if (user === false) {
    return <Spinner />;
  }
  return (
    <div className="action">
      <div className={classNotificationImg} onClick={menuToggle}>
        <img className="profile__img" src={`${url}img/${user.imageName}`} />
      </div>
      <div className="profiles__menu">
        <h3>
          {user.nickname}
          <br />
          <span>Mon compte</span>
        </h3>
        <ul className="profiles__menu__links">
          <Link
            to={`/profils/${user.nickname}`}
            className="profiles__menu--link"
          >
            <img src={logoUser} />
            <span className="profiles__menu__link--span">Mon profil</span>
          </Link>
          <Link to={`/profils/messages/recus`} className="profiles__menu--link">
            <img src={logoEnvelopet} />
            <span className={classNotificationLi}>Mes messages</span>
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
