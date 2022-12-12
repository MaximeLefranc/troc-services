interface CardProps {
  image: string;
  title: string;
  description: string;
  skills: { id: number; name: string }[];
}

function Card({ image, title, description, skills }: CardProps): JSX.Element {
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
      <div className="card__skills">
        {skills.map((skill) => (
          <p className="card__skills__skill" key={skill.id}>
            {skill.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Card;
