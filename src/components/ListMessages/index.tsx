import iconDelete from './../../assets/icons/delete.svg';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../reducers';
import './styles.scss';
import { Link } from 'react-router-dom';

function ListMessages(): JSX.Element {
  const isLoggedIn = useSelector((state: GlobalState) => state.user.isLoggedIn);
  // if (!isLoggedIn) {
  //   return <div>Page 404</div>;
  //   //! Si pas connecté, pas accès à cette page
  // }
  return (
    <section className="messages">
      <h2 className="messages__title">Mes messages</h2>
      <div className="messages__button">
        <button type="button" className="messages__button--received">
          Reçus
        </button>
        <button type="button" className="messages__button--sent">
          Envoyés
        </button>
      </div>
      <div className="messages__list">
        <Link to={`/profils/messages/:slug`}>
          <div className="messages__list__detail">
            <img
              src="https://static-cse.canva.com/blob/189288/article_canva_le_guide_pour_creer_de_superbes_photos_de_profil_9-1.jpg"
              className="messages__list__detail--img"
            ></img>
            <h3 className="messages__list__detail--title">Sujet du message</h3>
            <h4 className="messages__list__detail--user">Pseudo</h4>
            <p className="messages__list__detail--content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              feugiat bibendum neque, eget ultrices dui bibendum a. Aenean
              ultricies accumsan fringilla. Cras nibh ante, suscipit a bibendum
              finibus eget ligula. Curabitur ultrices, urna a molestie
              condimentum, ligula dolor varius enim, nec ullamcorper tellus quam
              in sapien. Sed lobortis libero nec libero aliquam, vitae interdum
              ipsum tincidunt. Sed consectetur sed velit eget gravida. Integer
              lacus urna, fermentum quis dictum at, commodo mollis dui.
              Curabitur Curabitur Curabitur pretium elementum mauris vel
              tincidunt. Aliquam vel nisl nec ipsum pharetra viverra non nisi.
              Quisque ultricies egestas turpis, id tempor lectus gravida luctus
              luctus nisl, id tempus velit. Sed egestas nulla in ipsum finibus
              lobortis.
            </p>
            <button className="messages__list__detail--delete" type="button">
              <img
                src={iconDelete}
                className="messages__list__detail--delete--img"
              />
            </button>
          </div>
        </Link>
        <div className="messages__list__detail">
          <img
            src="https://static-cse.canva.com/blob/189288/article_canva_le_guide_pour_creer_de_superbes_photos_de_profil_9-1.jpg"
            className="messages__list__detail--img"
          ></img>
          <h3 className="messages__list__detail--title">Sujet du message</h3>
          <h4 className="messages__list__detail--user">Pseudo</h4>
          <p className="messages__list__detail--content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            feugiat bibendum neque, eget ultrices dui bibendum a. Aenean
            ultricies accumsan fringilla. Cras nibh ante, suscipit a bibendum a,
            finibus eget ligula. Curabitur ultrices, urna a molestie
            condimentum, ligula dolor varius enim, nec ullamcorper tellus quam
            in sapien. Sed lobortis libero nec libero aliquam, vitae interdum
            ipsum tincidunt. Sed consectetur sed velit eget gravida. Integer
            lacus urna, fermentum quis dictum at, commodo mollis dui. Curabitur
            pretium elementum mauris vel tincidunt. Aliquam vel nisl nec ipsum
            pharetra viverra non a nisi. Quisque ultricies egestas turpis, id
            tempor lectus gravida ut. Vivamus eu luctus nisl, id tempus velit.
            Sed egestas nulla in ipsum finibus lobortis.
          </p>
          <button className="messages__list__detail--delete" type="button">
            <img
              src={iconDelete}
              className="messages__list__detail--delete--img"
            />
          </button>
        </div>
        <div className="messages__list__detail">
          <img
            src="https://static-cse.canva.com/blob/189288/article_canva_le_guide_pour_creer_de_superbes_photos_de_profil_9-1.jpg"
            className="messages__list__detail--img"
          ></img>
          <h3 className="messages__list__detail--title">Sujet du message</h3>
          <h4 className="messages__list__detail--user">Pseudo</h4>
          <p className="messages__list__detail--content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            feugiat bibendum neque, eget ultrices dui bibendum a. Aenean
            ultricies accumsan fringilla. Cras nibh ante, suscipit a bibendum a,
            finibus eget ligula. Curabitur ultrices, urna a molestie
            condimentum, ligula dolor varius enim, nec ullamcorper tellus quam
            in sapien. Sed lobortis libero nec libero aliquam, vitae interdum
            ipsum tincidunt. Sed consectetur sed velit eget gravida. Integer
            lacus urna, fermentum quis dictum at, commodo mollis dui. Curabitur
            pretium elementum mauris vel tincidunt. Aliquam vel nisl nec ipsum
            pharetra viverra non a nisi. Quisque ultricies egestas turpis, id
            tempor lectus gravida ut. Vivamus eu luctus nisl, id tempus velit.
            Sed egestas nulla in ipsum finibus lobortis.
          </p>
          <button className="messages__list__detail--delete" type="button">
            <img
              src={iconDelete}
              className="messages__list__detail--delete--img"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ListMessages;
