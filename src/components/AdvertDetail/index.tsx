import { Link } from 'react-router-dom';
import './styles.scss';

function AdvertDetail(): JSX.Element {
  return (
    <section className="advert">
      <div className="advert__picture">
        <h2 className="advert__picture__title">Titre de l'annonce</h2>
        <img
          className="advert__picture__image"
          src="https://www.istockphoto.com/resources/images/PhotoFTLP/FR/NatureLandscapes-508488398.jpg"
          alt="advert picture"
        />
        <img
          className="advert__picture__profile"
          src="https://static.photoweb.fr/photoweb.web.catalog.frontoffice/menu/toile-photo-2col-2020-02.jpg"
          alt="profile picture"
        />
      </div>
      <Link className="advert__contact" to="/annonces/[id]/envoyer-message">
        <button className="advert__contact__button" type="button">
          Echangeons nos services !
        </button>
      </Link>
      <p className="advert__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac
        congue enim. Donec a ipsum eget metus egestas fermentum. Mauris accumsan
        vitae metus ut varius. Morbi tincidunt, urna ut vehicula pellentesque,
        nisl erat placerat arcu, in sollicitudin leo diam a diam. Mauris rhoncus
        enim id metus mollis, id condimentum risus feugiat. Phasellus eget nunc
        tortor. Phasellus enim mauris, dapibus non elementum vel, scelerisque ac
        elit. Nam sem lectus, eleifend eu facilisis eu, viverra dictum ante.
        Nunc sit amet consequat ex, vitae scelerisque nibh. Proin facilisis
        gravida mauris, et luctus sapien dictum pharetra. Quisque tempor dui
        enim, quis congue lorem aliquet lobortis. Sed commodo elit tristique
        malesuada ultricies. Vivamus id aliquet arcu. Pellentesque a dolor vitae
        est posuere fringilla. Phasellus porta efficitur justo. Mauris vitae
        massa lobortis, molestie felis ut, vehicula mi. Duis sodales risus sed
        lectus interdum vulputate. In hac habitasse platea dictumst. Maecenas
        gravida imperdiet tristique. Morbi commodo sapien venenatis, commodo
        ante ac, rhoncus ipsum. Morbi rhoncus massa augue, vel malesuada nisi
        scelerisque non. Vivamus quis gravida leo, vel dapibus felis.
        Suspendisse elit dui, eleifend commodo commodo ut, bibendum id erat.
        Aenean velit sem, aliquet nec lectus id, consequat consectetur diam. Nam
        massa nisl, posuere ut tellus sodales, facilisis.
      </p>
      <h3 className="advert__title__skills">Ce que je sais faire</h3>
      <div className="advert__skill">
        <p className="advert__skill__name">Jardinage</p>
        <p className="advert__skill__name">Ménage</p>
        <p className="advert__skill__name">Cuisine</p>
        <p className="advert__skill__name">Electricité</p>
        <p className="advert__skill__name">Plomberie</p>
      </div>
    </section>
  );
}

export default AdvertDetail;
