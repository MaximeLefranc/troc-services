// ---- React Import ----
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';

// ---- Framer-Motion Import ----
import { motion } from 'framer-motion';
import { variantsDetail } from '../../../utils/framerMotionVariants';

// ---- Action Import ----
import { actionMessageIsRead } from '../../../actions/messages';

// ---- TypeScript Import ----
import { GlobalState } from '../../../reducers';

// ---- Selector Import ----
import { findMessageById } from '../../../selectors/messages';

// ---- Utils Import ----
import { getUrlApi } from '../../../utils/utils';

// ---- Components Import ----
import NotFound404 from '../../NotFound404';
import Spinner from '../../Spinner';

// ---- Styles Import ----
import './styles.scss';

function DetailMessage(): JSX.Element {
  const urlAPI = getUrlApi();
  const dispatch = useDispatch();
  const { slug } = useParams();
  const message = useSelector((state: GlobalState) =>
    findMessageById(state.messages.messagesUser, slug)
  );
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);

  useEffect(() => {
    if (
      message !== undefined &&
      message !== false &&
      message[0] !== undefined &&
      !message[0].isRead
    ) {
      if (typeof slug === 'string') {
        dispatch(actionMessageIsRead(slug));
      }
    }
  }, []);

  if (!localStorage.getItem('token_troc_services')) {
    return <Navigate to="/accueil" replace />;
  }
  if (message === undefined || message === false) {
    return <NotFound404 />;
  }
  if (isLoading || message.length === 0) {
    return <Spinner />;
  }

  return (
    <motion.section
      className="message"
      initial="hide"
      animate="show"
      exit="hide"
      variants={variantsDetail}
    >
      <Link to={`/profils/${message[0].sender.nickname}`}>
        <img
          className="message__img"
          src={`${urlAPI}img/${message[0].sender.imageName}`}
        />
      </Link>
      <p className="message__pseudo">{message[0].sender.nickname}</p>
      <h2 className="message__subject">{message[0].object}</h2>
      <p className="message__content">{message[0].content}</p>
      <Link to={`/profils/${message[0].sender.id}/envoyer-message`}>
        <button type="button" className="message__button">
          {`Répondre à ${message[0].sender.nickname}`}
        </button>
      </Link>
    </motion.section>
  );
}

export default DetailMessage;
