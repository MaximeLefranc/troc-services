import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionChangeInputValue } from '../../actions/user';
import { GlobalState } from '../../reducers';
import Field from './Field';
import './styles.scss';

function LogInForm(): JSX.Element {
  const dispatch = useDispatch();
  const email = useSelector((state: GlobalState) => state.user.inputEmail);
  const password = useSelector(
    (state: GlobalState) => state.user.inputPassword
  );
  console.log(email);
  const isLoggedIn = useSelector((state: GlobalState) => state.user.isLoggedIn);
  const changeField = (value: string, nameSateInput: string) => {
    dispatch(actionChangeInputValue(value, nameSateInput));
  };
  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
  };
  return (
    <div className="login-form">
      {isLoggedIn && (
        <div className="login-form-logged">
          <p className="login-form-message">Message</p>
          <button type="button" className="login-form-button">
            Déconnexion
          </button>
        </div>
      )}
      {!isLoggedIn && (
        <form className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            type="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <button type="submit" className="login-form-button">
            OK
          </button>
        </form>
      )}
    </div>
  );
}

export default LogInForm;
