import Card from '../Card';

function ProfilesCards(): JSX.Element {
  return (
    <section className="main">
      <h2 className="main__title">Les dernièrs membres</h2>
      <section className="cards">
        <Card
          image="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=2000"
          title="pseudo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu mollis ipsum, ut vehicula leo. Sed sit amet dignissim erat, a vestibulum ipsum. Aenean vulputate sapien vitae lacus consectetur feugiat."
          skills={[
            'jardinage',
            'ménage',
            'electricité',
            'plomberie',
            'aide à la personne',
          ]}
        />
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQJT5Q8nwcCsVhKTkDObpOr5Go0GIoWBGNyNkXBOS&s"
          title="pseudo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu mollis ipsum, ut vehicula leo. Sed sit amet dignissim erat, a vestibulum ipsum. Aenean vulputate sapien vitae lacus consectetur feugiat."
          skills={[
            'jardinage',
            'ménage',
            'electricité',
            'plomberie',
            'aide à la personne',
          ]}
        />
        <Card
          image="https://img.freepik.com/photos-gratuite/portrait-profil-magnifique-beau-jeune-homme-traits-parfaits-poils-cheveux-rougeatres-posant-au-mur-fond-blanc-cavalier-regardant-expression-faciale-reveuse_343059-2574.jpg?w=2000"
          title="pseudo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu mollis ipsum, ut vehicula leo. Sed sit amet dignissim erat, a vestibulum ipsum. Aenean vulputate sapien vitae lacus consectetur feugiat."
          skills={[
            'jardinage',
            'ménage',
            'electricité',
            'plomberie',
            'aide à la personne',
          ]}
        />
        <Card
          image="https://static-cse.canva.com/blob/189288/article_canva_le_guide_pour_creer_de_superbes_photos_de_profil_9-1.jpg"
          title="pseudo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu mollis ipsum, ut vehicula leo. Sed sit amet dignissim erat, a vestibulum ipsum. Aenean vulputate sapien vitae lacus consectetur feugiat."
          skills={[
            'jardinage',
            'ménage',
            'electricité',
            'plomberie',
            'aide à la personne',
          ]}
        />
      </section>
    </section>
  );
}

export default ProfilesCards;
