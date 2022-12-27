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
import { MutableRefObject, useRef } from 'react';

function Profiles(): JSX.Element {
  const url = getUrlApi();
  const refMenu = useRef() as MutableRefObject<HTMLDivElement>;
  const refImg = useRef() as MutableRefObject<HTMLDivElement>;
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
  const menuToggleShow = () => {
    refImg.current.classList.toggle('isActive');
    refMenu.current.classList.toggle('active');
  };
  const menuToggleHide = () => {
    refImg.current.classList.remove('isActive');
    refMenu.current.classList.remove('active');
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
      <div
        className={classNotificationImg}
        onClick={menuToggleShow}
        ref={refImg}
      >
        <img className="profile__img" src={`${url}img/${user.imageName}`} />
      </div>
      <div
        className="profiles__menu"
        ref={refMenu}
        onMouseLeave={menuToggleHide}
      >
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
