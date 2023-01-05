import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { GlobalState } from '../../reducers';
import './styles.scss';
import Spinner from '../Spinner';
import { useEffect } from 'react';
import Message from './Message';
import { SentOrReceivedMessages } from '../../selectors/messages';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { actionFetchAllMessagesForOneUser } from '../../actions/messages';
import { variantsSimple } from '../../utils/framerMotionVariants';

export interface MessageDetail {
  id: number;
  content: string;
  sentAt: string;
  isRead: boolean;
  isHidden: boolean;
  sender: { id: number; nickname: string; imageName: string };
  receiver: { id: number; nickname: string; imageName: string };
  object: string;
}
export interface MessagesInterface {
  sendOrReceived: string;
  messages: MessageDetail[];
}

function ListMessages(): JSX.Element {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);
  const searchReceivedOrSentMessages =
    pathname.split('/')[3] === 'recus' ? 'messagesReceived' : 'messagesSent';
  const messagesToShow = useSelector((state: GlobalState) =>
    SentOrReceivedMessages(
      state.messages.messagesUser,
      searchReceivedOrSentMessages
    )
  );
  useEffect(() => {
    if (localStorage.getItem('token_troc_services')) {
      dispatch(actionFetchAllMessagesForOneUser());
    }
    window.scrollTo(0, 0);
  }, []);
  if (!localStorage.getItem('token_troc_services')) {
    return <Navigate to="/inscription" replace />;
  }
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <motion.section
      className="messages"
      initial="hide"
      animate="show"
      exit="hide"
      variants={variantsSimple}
    >
      <h2 className="messages__title">Mes messages</h2>
      <div className="messages__button">
        <Link to="/profils/messages/recus" className="messages__button__links">
          <button type="button" className="messages__button--received">
            Reçus
          </button>
        </Link>
        <Link
          to="/profils/messages/envoyes"
          className="messages__button__links"
        >
          <button type="button" className="messages__button--sent">
            Envoyés
          </button>
        </Link>
      </div>
      <div className="messages__list">
        {messagesToShow !== undefined && messagesToShow !== false ? (
          messagesToShow.messages.map((message: MessageDetail) => (
            <Message
              object={message.object}
              isRead={message.isRead}
              image={message.sender.imageName}
              key={message.id}
              id={message.id}
              nickname={message.sender.nickname}
              content={message.content}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </motion.section>
  );
}

export default ListMessages;
