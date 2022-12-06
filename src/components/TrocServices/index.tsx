import { Route, Routes } from 'react-router-dom';
import Main from '../Main';
import Welcome from '../Welcome';
import './styles.scss';

function TrocServices() {
  return (
    <div className="TrocServices">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/accueil" element={<Main />} />
      </Routes>
    </div>
  );
}

export default TrocServices;
