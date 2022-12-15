import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionChangeInputValueConnection,
  actionFetchAuthentUser,
  actionToggleLogInForm,
} from '../../actions/user';
import { GlobalState } from '../../reducers';
import FieldLogIn from './FieldLogIn';
import './styles.scss';

function LogInForm(): JSX.Element {
  const dispatch = useDispatch();
  const email = useSelector((state: GlobalState) => state.user.email);
  const password = useSelector((state: GlobalState) => state.user.password);
  const isLoggedIn = useSelector((state: GlobalState) => state.user.isLoggedIn);
  const modalLogInForm = useSelector(
    (state: GlobalState) => state.user.modalLogInForm
  );
  const errorMessage = useSelector(
    (state: GlobalState) => state.user.messageAuthent
  );
  const changeField = (value: string, nameStateInput: string) => {
    dispatch(actionChangeInputValueConnection(value, nameStateInput));
  };
  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(actionFetchAuthentUser());
  };
  const handleCloseModal = (): void => {
    dispatch(actionToggleLogInForm());
  };
  const classModal =
    modalLogInForm === true ? 'login__form login__form--open' : 'login__form';
  return (
    <div className={classModal}>
      <button
        className="login__form__close"
        type="button"
        onClick={handleCloseModal}
      >
        &#10005;
      </button>
      {!isLoggedIn && (
        <form className="login__form__element" onSubmit={handleSubmit}>
          <FieldLogIn
            name="email"
            type="email"
            placeholder="Adresse Email"
            onChangeHandle={changeField}
            value={email}
          />
          <FieldLogIn
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChangeHandle={changeField}
            value={password}
          />
          <button type="submit" className="login__form__button">
            Connexion
          </button>
        </form>
      )}
      <p className="login__form__message">{errorMessage}</p>
    </div>
  );
}

export default LogInForm;
