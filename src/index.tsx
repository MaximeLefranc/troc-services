// ---- React DOM Import ----
import ReactDOM from 'react-dom/client';

// ---- Component Import ----
import TrocServices from './components/TrocServices/index';

// ---- Test performance Import ----
import reportWebVitals from './reportWebVitals';

// ---- React Rooter DOM Import ----
import { BrowserRouter } from 'react-router-dom';

// ---- Redux Import ----
import { Provider } from 'react-redux';
import store from './store/index';

// ---- Styles Import ----
import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <TrocServices />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
