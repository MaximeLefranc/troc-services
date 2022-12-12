import './styles.scss';

function ProfileDetail(): JSX.Element {
  return (
    <section className="main">
      <section className="profile">
        <img
          className="profile__picture"
          src="https://img.freepik.com/photos-gratuite/portrait-profil-magnifique-beau-jeune-homme-traits-parfaits-poils-cheveux-rougeatres-posant-au-mur-fond-blanc-cavalier-regardant-expression-faciale-reveuse_343059-2574.jpg?w=2000"
          alt="profile picture of member"
        />
        <h2 className="profile__pseudo">Pseudo du membre</h2>
        <button className="profile__contact" type="button">
          {/* ou modifier ! */}
          Me contacter
        </button>
        <p className="profile__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          mollis ipsum, ut vehicula leo. Sed sit amet dignissim erat, a
          vestibulum ipsum. Aenean vulputate sapien vitae lacus consectetur
          feugiat.sit amet, consectetur adipiscing elit. Quisque eu mollis
          mollis mollis ipsum, ut vehicula leo. Sed sit amet dignissim erat, a
          vestibulum ipsum. ipsum. ipsum. Aenean vulputate sapien vitae lacus
          consectetur feugiat.
        </p>
        <h3 className="profile__title">Ce que je sais faire</h3>
        <div className="profile__skills">
          <p className="profile__skills__skill">Jardinage</p>
          <p className="profile__skills__skill">Jardinage</p>
          <p className="profile__skills__skill">Jardinage</p>
          <p className="profile__skills__skill">Jardinage</p>
          <p className="profile__skills__skill">Jardinage</p>
          <p className="profile__skills__skill">Jardinage</p>
          <p className="profile__skills__skill">Jardinage</p>
          <p className="profile__skills__skill">Jardinage</p>
        </div>
        <h3 className="profile__title">Mes annonces</h3>
        <div className="profile__adverts">
          <img
            className="profile__adverts__picture"
            src="https://www.istockphoto.com/resources/images/PhotoFTLP/FR/NatureLandscapes-508488398.jpg"
          ></img>
          <h4 className="profile__adverts__title">Titre de l'annonce</h4>
          <p className="profile__adverts__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            mollis ipsum, ut vehicula leo. Sed sit amet dignissim erat, a
            vestibulum ipsum. Aenean vulputate sapien vitae lacus consectetur
            feugiat.sit amet, consectetur adipiscing elit. Quisque eu mollis
            mollis mollis ipsum, ut vehicula leo. Sed sit amet dignissim erat, a
            vestibulum ipsum. ipsum. ipsum. Aenean vulputate sapien vitae lacus
            consectetur feugiat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Quisque eu mollis ipsum, ut vehicula leo. Sed sit
            amet dignissim erat, a vestibulum ipsum. Aenean vulputate sapien
            vitae lacus consectetur feugiat.sit amet, consectetur adipiscing
            elit. Quisque eu mollis mollis mollis ipsum, ut vehicula leo. Sed
            sit amet dignissim erat, a vestibulum ipsum. ipsum. ipsum. Aenean
            vulputate sapien vitae lacus consectetur feugiat.
          </p>
        </div>
        <div className="profile__adverts">
          <img
            className="profile__adverts__picture"
            src="https://www.istockphoto.com/resources/images/PhotoFTLP/FR/NatureLandscapes-508488398.jpg"
          ></img>
          <h4 className="profile__adverts__title">Titre de l'annonce</h4>
          <p className="profile__adverts__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            mollis ipsum, ut vehicula leo. Sed sit amet dignissim erat, a
            vestibulum ipsum. Aenean vulputate sapien vitae lacus consectetur
            feugiat.sit amet, consectetur adipiscing elit. Quisque eu mollis
            mollis mollis ipsum, ut vehicula leo. Sed sit amet dignissim erat, a
            vestibulum ipsum. ipsum. ipsum. Aenean vulputate sapien vitae lacus
            consectetur feugiat.
          </p>
        </div>
        <div className="profile__adverts">
          <img
            className="profile__adverts__picture"
            src="https://www.istockphoto.com/resources/images/PhotoFTLP/FR/NatureLandscapes-508488398.jpg"
          ></img>
          <h4 className="profile__adverts__title">Titre de l'annonce</h4>
          <p className="profile__adverts__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            mollis ipsum, ut vehicula leo. Sed sit amet dignissim erat, a
            vestibulum ipsum. Aenean vulputate sapien vitae lacus consectetur
            feugiat.sit amet, consectetur adipiscing elit. Quisque eu mollis
            mollis mollis ipsum, ut vehicula leo. Sed sit amet dignissim erat, a
            vestibulum ipsum. ipsum. ipsum. Aenean vulputate sapien vitae lacus
            consectetur feugiat.
          </p>
        </div>
      </section>
    </section>
  );
}

export default ProfileDetail;
