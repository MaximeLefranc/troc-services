interface DevImageProps {
  name: string;
  image: string;
}

function DevImage({ name, image }: DevImageProps): JSX.Element {
  return (
    <div className="team__member">
      <h3 className="team__member__name">{name}</h3>
      <img
        className="team__member__picture"
        src={image}
        alt="picture of dev"
      ></img>
    </div>
  );
}

export default DevImage;
