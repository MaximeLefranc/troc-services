import '../Welcome/styles.scss';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionChangeInputValueSearchBar } from '../../actions/searchBar';
import { GlobalState } from '../../reducers';
import { ChangeEvent } from 'react';

function FormFilters() {
  const dispatch = useDispatch();
  const searchName = useSelector(
    (state: GlobalState) => state.searchBar.searchName
  );
  const searchZipCode = useSelector(
    (state: GlobalState) => state.searchBar.searchZipCode
  );
  const changeField = (value: string, nameInput: string): void => {
    dispatch(actionChangeInputValueSearchBar(value, nameInput));
  };
  const handleChangeValueInState = (evt: ChangeEvent): void => {
    const value = (evt.target as HTMLInputElement).value;
    const inputName = (evt.target as HTMLInputElement).name;
    console.log(value, inputName);
    changeField(value, inputName);
  };
  const location = useLocation();
  const classNameVariant: string = location.pathname !== '/' ? 'header__' : '';
  return (
    <form className={`${classNameVariant}form`}>
      <input
        name="searchName"
        className={`${classNameVariant}form__input--service`}
        value={searchName}
        placeholder="Un service ..."
        onChange={handleChangeValueInState}
      />
      <input
        name="searchZipCode"
        className={`${classNameVariant}form__input--zip`}
        value={searchZipCode}
        placeholder="Où ..."
        onChange={handleChangeValueInState}
      />
      <button className={`${classNameVariant}form__button`} type="button">
        Rechercher
      </button>
    </form>
  );
}

export default FormFilters;
