import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { GlobalState } from '../../../reducers';
import { findMessageById } from '../../../selectors/messages';
import { getUrlApi } from '../../../utils/utils';
import NotFound404 from '../../NotFound404';
import Spinner from '../../Spinner';
import './styles.scss';

function DetailMessage(): JSX.Element {
  const urlAPI = getUrlApi();
  const { slug } = useParams();
  const message = useSelector((state: GlobalState) =>
    findMessageById(state.messages.messagesUser, slug)
  );
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);
  if (!localStorage.getItem('token_troc_services')) {
    return <Navigate to="/accueil" replace />;
  }
  if (isLoading) {
    return <Spinner />;
  }
  if (message === undefined || message === false) {
    return <NotFound404 />;
  }
  useEffect(() => {
    // dispatch action for is read = true
  }, []);
  return (
    <section className="message">
      <Link to={`/profils/${message[0].sender.nickname}`}>
        <img
          className="message__img"
          src={`${urlAPI}img/${message[0].sender.imageName}`}
        />
      </Link>
      <p className="message__pseudo">{message[0].sender.nickname}</p>
      <h2 className="message__subject">Sujet du message</h2>
      <p className="message__content">{message[0].content}</p>
      <Link to={`/profils/${message[0].sender.id}/envoyer-message`}>
        <button type="button" className="message__button">
          {`Répondre à ${message[0].sender.nickname}`}
        </button>
      </Link>
    </section>
  );
}

export default DetailMessage;
