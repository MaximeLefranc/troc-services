interface CardProps {
  image: string;
  title: string;
  description: string;
}

function Card({ image, title, description }: CardProps): JSX.Element {
  return (
    <div className="card">
      <picture className="card__container">
        <img
          className="card__container__image"
          src={image}
          alt="image advertisement"
        />
      </picture>
      <div className="card__description">
        <h3 className="card__description__title">{title}</h3>
        <p className="card__description__resume">{description}</p>
      </div>
    </div>
  );
}

export default Card;
