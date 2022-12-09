import { useSelector } from 'react-redux';
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
}

function AdvertsCards(): JSX.Element {
  const advertList = useSelector(
    (state: GlobalState) => state.advertisements.listOfAdverts
  );
  const isLoading = useSelector((state: GlobalState) => state.user.isLoading);
  return (
    <section className="main">
      <h2 className="main__title">Les dernières annonces</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="cards">
          {advertList.map((advert: Adverts) => (
            <Card
              key={advert.id}
              image={advert.imageName}
              title={advert.title}
              description={advert.content}
              skills={advert.skills.map((skill) => skill.name)}
            />
          ))}
        </section>
      )}
    </section>
  );
}

export default AdvertsCards;
