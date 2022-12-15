import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { GlobalState } from '../../../reducers';
import Spinner from '../../Spinner';
import Card from '../Card';
import './../styles.scss';

export interface Adverts {
  id: number;
  imageName: string;
  title: string;
  content: string;
  skills: [
    {
      id: number;
      name: string;
    }
  ];
  user: {
    id: number;
    imageName: string;
    nickname: string;
    skill: [
      {
        id: number;
        name: string;
      }
    ];
  };
}

function AdvertsCards(): JSX.Element {
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);
  const advertList = useSelector(
    (state: GlobalState) => state.advertisements.listOfAdverts
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (advertList.length === 0) {
    return <div>Page 404</div>; //! Page 404 à faire
  }
  return (
    <section className="main">
      <h2 className="main__title">Les dernières annonces</h2>
      <section className="cards">
        {advertList.map((advert: Adverts) => (
          <Link
            key={advert.id}
            className="cards__link"
            to={`/annonces/${advert.id}`}
          >
            <Card
              key={advert.id}
              image={advert.imageName}
              title={advert.title}
              description={advert.content}
              skills={advert.skills}
            />
          </Link>
        ))}
      </section>
    </section>
  );
}

export default AdvertsCards;
