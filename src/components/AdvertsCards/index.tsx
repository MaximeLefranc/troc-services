import Card from './Card';
import './styles.scss';

function AdvertsCards(): JSX.Element {
  return (
    <section className="cards">
      <Card
        image="https://static.photoweb.fr/photoweb.web.catalog.frontoffice/menu/toile-photo-2col-2020-02.jpg"
        title="Test"
        description="Ici viendra la description"
      />
      <div className="card">
        <picture className="card__container">
          <img
            className="card__container__image"
            src="https://www.istockphoto.com/resources/images/PhotoFTLP/FR/NatureLandscapes-508488398.jpg"
            alt="image advertisement"
          />
        </picture>
        <div className="card__description">
          <h3 className="card__description__title">Titre de l'annonce</h3>
          <p className="card__description__resume">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            hendrerit nulla. Duis quis tellus eros. Fusce vitae elementum enim.
            Etiam lacinia, urna sed scelerisque iaculis, arcu nulla finibus leo.
          </p>
        </div>
      </div>
      <div className="card">
        <picture className="card__container">
          <img
            className="card__container__image"
            src="https://www.istockphoto.com/resources/images/PhotoFTLP/FR/NatureLandscapes-508488398.jpg"
            alt="image advertisement"
          />
        </picture>
        <div className="card__description">
          <h3 className="card__description__title">Titre de l'annonce</h3>
          <p className="card__description__resume">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            hendrerit nulla. Duis quis tellus eros. Fusce vitae elementum enim.
            Etiam lacinia, urna sed scelerisque iaculis, arcu nulla finibus leo.
          </p>
        </div>
      </div>
      <div className="card">
        <picture className="card__container">
          <img
            className="card__container__image"
            src="https://www.istockphoto.com/resources/images/PhotoFTLP/FR/NatureLandscapes-508488398.jpg"
            alt="image advertisement"
          />
        </picture>
        <div className="card__description">
          <h3 className="card__description__title">Titre de l'annonce</h3>
          <p className="card__description__resume">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            hendrerit nulla. Duis quis tellus eros. Fusce vitae elementum enim.
            Etiam lacinia, urna sed scelerisque iaculis, arcu nulla finibus leo.
          </p>
        </div>
      </div>
      <div className="card">
        <picture className="card__container">
          <img
            className="card__container__image"
            src="https://www.istockphoto.com/resources/images/PhotoFTLP/FR/NatureLandscapes-508488398.jpg"
            alt="image advertisement"
          />
        </picture>
        <div className="card__description">
          <h3 className="card__description__title">Titre de l'annonce</h3>
          <p className="card__description__resume">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            hendrerit nulla. Duis quis tellus eros. Fusce vitae elementum enim.
            Etiam lacinia, urna sed scelerisque iaculis, arcu nulla finibus leo.
          </p>
        </div>
      </div>
      <div className="card">
        <picture className="card__container">
          <img
            className="card__container__image"
            src="https://www.istockphoto.com/resources/images/PhotoFTLP/FR/NatureLandscapes-508488398.jpg"
            alt="image advertisement"
          />
        </picture>
        <div className="card__description">
          <h3 className="card__description__title">Titre de l'annonce</h3>
          <p className="card__description__resume">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            hendrerit nulla. Duis quis tellus eros. Fusce vitae elementum enim.
            Etiam lacinia, urna sed scelerisque iaculis, arcu nulla finibus leo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AdvertsCards;
