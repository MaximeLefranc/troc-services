import Card from '../Card';
import './../styles.scss';

function AdvertsCards(): JSX.Element {
  return (
    <section className="main">
      <h2 className="main__title">Les dernières annonces</h2>
      <section className="cards">
        <Card
          image="https://static.photoweb.fr/photoweb.web.catalog.frontoffice/menu/toile-photo-2col-2020-02.jpg"
          title="Test"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim neque at sapien consequat placerat. Cras nunc lectus, gravida consequat diam vel, laoreet pellentesque nunc. Proin aliquet neque non cursus viverra. Aenean nec vestibulum dui. Vivamus gravida nunc et est scelerisque faucibus. Sed vehicula, justo condimentum aliquam interdum, nisi tortor posuere libero, id pulvinar libero nulla in sapien. Donec non velit eleifend, semper purus ac, lobortis elit. Nullam rutrum nisl vitae sapien vulputate, sit amet ultrices risus sagittis. Cras eu ipsum urna. Fusce pellentesque ac nisl eu feugiat. Sed suscipit, ante vitae molestie imperdiet, diam massa tempor odio, in euismod mi metus a erat. Phasellus faucibus lacus vel vehicula finibus. Proin laoreet enim at ornare tempor. Curabitur feugiat vestibulum felis sed commodo."
          skills={[
            'jardinage',
            'ménage',
            'electricité',
            'plomberie',
            'aide à la personne',
          ]}
        />
        <Card
          image="https://www.istockphoto.com/resources/images/PhotoFTLP/FR/NatureLandscapes-508488398.jpg"
          title="Test"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim neque at sapien consequat placerat. Cras nunc lectus, gravida consequat diam vel, laoreet pellentesque nunc. Proin aliquet neque non cursus viverra. Aenean nec vestibulum dui. Vivamus gravida nunc et est scelerisque faucibus. Sed vehicula, justo condimentum aliquam interdum, nisi tortor posuere libero, id pulvinar libero nulla in sapien. Donec non velit eleifend, semper purus ac, lobortis elit. Nullam rutrum nisl vitae sapien vulputate, sit amet ultrices risus sagittis. Cras eu ipsum urna. Fusce pellentesque ac nisl eu feugiat. Sed suscipit, ante vitae molestie imperdiet, diam massa tempor odio, in euismod mi metus a erat. Phasellus faucibus lacus vel vehicula finibus. Proin laoreet enim at ornare tempor. Curabitur feugiat vestibulum felis sed commodo."
          skills={[
            'jardinage',
            'ménage',
            'electricité',
            'plomberie',
            'aide à la personne',
          ]}
        />
        <Card
          image="https://www.istockphoto.com/resources/images/PhotoFTLP/FR/NatureLandscapes-508488398.jpg"
          title="Test"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim neque at sapien consequat placerat. Cras nunc lectus, gravida consequat diam vel, laoreet pellentesque nunc. Proin aliquet neque non cursus viverra. Aenean nec vestibulum dui. Vivamus gravida nunc et est scelerisque faucibus. Sed vehicula, justo condimentum aliquam interdum, nisi tortor posuere libero, id pulvinar libero nulla in sapien. Donec non velit eleifend, semper purus ac, lobortis elit. Nullam rutrum nisl vitae sapien vulputate, sit amet ultrices risus sagittis. Cras eu ipsum urna. Fusce pellentesque ac nisl eu feugiat. Sed suscipit, ante vitae molestie imperdiet, diam massa tempor odio, in euismod mi metus a erat. Phasellus faucibus lacus vel vehicula finibus. Proin laoreet enim at ornare tempor. Curabitur feugiat vestibulum felis sed commodo."
          skills={[
            'jardinage',
            'ménage',
            'electricité',
            'plomberie',
            'aide à la personne',
          ]}
        />
        <Card
          image="https://www.istockphoto.com/resources/images/PhotoFTLP/FR/NatureLandscapes-508488398.jpg"
          title="Test"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim neque at sapien consequat placerat. Cras nunc lectus, gravida consequat diam vel, laoreet pellentesque nunc. Proin aliquet neque non cursus viverra. Aenean nec vestibulum dui. Vivamus gravida nunc et est scelerisque faucibus. Sed vehicula, justo condimentum aliquam interdum, nisi tortor posuere libero, id pulvinar libero nulla in sapien. Donec non velit eleifend, semper purus ac, lobortis elit. Nullam rutrum nisl vitae sapien vulputate, sit amet ultrices risus sagittis. Cras eu ipsum urna. Fusce pellentesque ac nisl eu feugiat. Sed suscipit, ante vitae molestie imperdiet, diam massa tempor odio, in euismod mi metus a erat. Phasellus faucibus lacus vel vehicula finibus. Proin laoreet enim at ornare tempor. Curabitur feugiat vestibulum felis sed commodo."
          skills={[
            'jardinage',
            'ménage',
            'electricité',
            'plomberie',
            'aide à la personne',
          ]}
        />
        <Card
          image="https://www.istockphoto.com/resources/images/PhotoFTLP/FR/NatureLandscapes-508488398.jpg"
          title="Test"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim neque at sapien consequat placerat. Cras nunc lectus, gravida consequat diam vel, laoreet pellentesque nunc. Proin aliquet neque non cursus viverra. Aenean nec vestibulum dui. Vivamus gravida nunc et est scelerisque faucibus. Sed vehicula, justo condimentum aliquam interdum, nisi tortor posuere libero, id pulvinar libero nulla in sapien. Donec non velit eleifend, semper purus ac, lobortis elit. Nullam rutrum nisl vitae sapien vulputate, sit amet ultrices risus sagittis. Cras eu ipsum urna. Fusce pellentesque ac nisl eu feugiat. Sed suscipit, ante vitae molestie imperdiet, diam massa tempor odio, in euismod mi metus a erat. Phasellus faucibus lacus vel vehicula finibus. Proin laoreet enim at ornare tempor. Curabitur feugiat vestibulum felis sed commodo."
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

export default AdvertsCards;
