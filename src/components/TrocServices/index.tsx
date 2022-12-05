import { Route, Routes } from 'react-router-dom';
import Welcome from '../Welcome';
import './styles.scss';

function TrocServices() {
  return (
    <div className="TrocServices">
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default TrocServices;
