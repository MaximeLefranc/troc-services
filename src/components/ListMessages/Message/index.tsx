// ---- React Import ----
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// ---- Image Import ----
import iconDelete from './../../../assets/icons/delete.svg';

// ---- Utils Import ----
import { getUrlApi } from '../../../utils/utils';

// ---- Action Import ----
import { actionDeleteMessage } from '../../../actions/messages';

interface MessagePops {
  id: number;
  nickname: string;
  content: string;
  image: string;
  isRead: boolean;
  object: string;
}

function Message({
  id,
  nickname,
  content,
  image,
  isRead,
  object,
}: MessagePops) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isNotReadClassName =
    !isRead && pathname.split('/')[3] === 'recus'
      ? 'messages__list__detail notRead'
      : 'messages__list__detail';
  const urlAPI = getUrlApi();
  const handleDeleteMessage = () => {
    if (confirm('Voulez-vous vraiment supprimer ce message ?')) {
      dispatch(actionDeleteMessage(id));
    }
  };
  return (
    <div className={isNotReadClassName}>
      <Link to={`/profils/messages/${id}`}>
        <img
          src={`${urlAPI}img/${image}`}
          className="messages__list__detail--img"
          alt="profile photo"
        />
        <h3 className="messages__list__detail--title">{object}</h3>
        <h4 className="messages__list__detail--user">{nickname}</h4>
        <p className="messages__list__detail--content">{content}</p>
      </Link>
      <button
        className="messages__list__detail--delete"
        type="button"
        onClick={handleDeleteMessage}
      >
        <img src={iconDelete} className="messages__list__detail--delete--img" />
      </button>
    </div>
  );
}

export default Message;
