import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from '../Footer';
import Main from '../Main';
import Welcome from '../Welcome';
import './styles.scss';

interface Location {
  pathname: string;
}

function TrocServices(): JSX.Element {
  const { pathname } = useLocation() as Location;
  const isWelcomePage: boolean = pathname === '/';
  return (
    <div className="TrocServices">
      {/* !isWelcomePage && <Header /> */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/accueil" element={<Main />} />
        <Route path="/accueil" element={<Main />} />
      </Routes>
      {!isWelcomePage && <Footer />}
    </div>
  );
}

export default TrocServices;
