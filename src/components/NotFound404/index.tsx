import image404 from './../../assets/images/image-404.svg';
import './styles.scss';

function NotFound404() {
  return (
    <section className="notFound">
      <h1 className="notFound__title">404 Page introuvable</h1>
      <div className="notFound__container">
        <img
          className="notFound__container__img"
          src={image404}
          alt="image 404"
        />
      </div>
      <p className="notFound__">
        Après des recherches interminables, nous n'avons pas trouvé la page
        demandé
      </p>
    </section>
  );
}

export default NotFound404;
