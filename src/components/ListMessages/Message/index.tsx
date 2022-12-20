import iconDelete from './../../../assets/icons/delete.svg';
import { Link } from 'react-router-dom';
import { getUrlApi } from '../../../utils/utils';
import { useDispatch } from 'react-redux';

interface MessagePops {
  id: number;
  nickname: string;
  content: string;
  image: string;
  isRead: boolean;
}

function Message({ id, nickname, content, image, isRead }: MessagePops) {
  const dispatch = useDispatch;
  const isNotReadClassName = isRead
    ? 'messages__list__detail'
    : 'messages__list__detail notRead';
  const urlAPI = getUrlApi();
  const handleDeleteMessage = () => {
    // dispatch action post for hide this message with id
  };
  return (
    <Link to={`/profils/messages/${id}`}>
      <div className={isNotReadClassName}>
        <img
          src={`${urlAPI}img/${image}`}
          className="messages__list__detail--img"
          alt="profile photo"
        />
        <h3 className="messages__list__detail--title">Sujet du message</h3>
        <h4 className="messages__list__detail--user">{nickname}</h4>
        <p className="messages__list__detail--content">{content}</p>
        <button
          className="messages__list__detail--delete"
          type="button"
          onClick={handleDeleteMessage}
        >
          <img
            src={iconDelete}
            className="messages__list__detail--delete--img"
          />
        </button>
      </div>
    </Link>
  );
}

export default Message;
