import '../Welcome/styles.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionChangeInputValueSearchBar,
  actionSaveResultOfResearchAdverts,
  actionSaveResultOfResearchMembers,
} from '../../actions/searchBar';
import { GlobalState } from '../../reducers';
import { ChangeEvent, SyntheticEvent } from 'react';
import { findAdvertsBySearchBar } from '../../selectors/advertisements';
import { findMembersBySearchBar } from '../../selectors/members';

function FormFilters() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchName = useSelector(
    (state: GlobalState) => state.searchBar.searchName
  );
  const searchZipCode = useSelector(
    (state: GlobalState) => state.searchBar.searchZipCode
  );
  const listOfAdverts = useSelector(
    (state: GlobalState) => state.advertisements.listOfAdverts
  );
  const listOfMembers = useSelector(
    (state: GlobalState) => state.user.listOfMembers
  );
  const changeField = (value: string, nameInput: string): void => {
    dispatch(actionChangeInputValueSearchBar(value, nameInput));
  };
  const handleChangeValueInState = (evt: ChangeEvent): void => {
    const value = (evt.target as HTMLInputElement).value;
    const inputName = (evt.target as HTMLInputElement).name;
    changeField(value, inputName);
  };
  const { pathname } = useLocation();
  const classNameVariant: string = pathname !== '/' ? 'header__' : '';
  const handlerSubmitSearchBar = (evt: SyntheticEvent) => {
    evt.preventDefault();
    if (pathname.split('/')[1] === 'profils') {
      const membersFiltered = findMembersBySearchBar(
        listOfMembers,
        searchName,
        searchZipCode
      );
      if (membersFiltered !== false) {
        dispatch(actionSaveResultOfResearchMembers(membersFiltered));
      } else {
        dispatch(actionSaveResultOfResearchMembers([]));
      }
      return navigate('/profils/filtre/');
    }
    const advertFiltered = findAdvertsBySearchBar(
      listOfAdverts,
      searchName,
      searchZipCode
    );
    console.log(advertFiltered);
    if (advertFiltered !== false) {
      dispatch(actionSaveResultOfResearchAdverts(advertFiltered));
    } else {
      dispatch(actionSaveResultOfResearchAdverts([]));
    }
    return navigate('/annonces/filtre/');
  };
  return (
    <form
      className={`${classNameVariant}form`}
      onSubmit={handlerSubmitSearchBar}
    >
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
      <button className={`${classNameVariant}form__button`} type="submit">
        Rechercher
      </button>
    </form>
  );
}

export default FormFilters;
