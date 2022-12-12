import '../Welcome/styles.scss';
import { useLocation } from 'react-router-dom';

function FormFilters() {
  const location = useLocation();
  const classNameVariant: string = location.pathname !== '/' ? 'header__' : '';
  return (
    <form className={`${classNameVariant}form`}>
      <input
        className={`${classNameVariant}form__input--service`}
        placeholder="Un service ..."
      />
      <input
        className={`${classNameVariant}form__input--zip`}
        placeholder="Où ..."
      />
      <button className={`${classNameVariant}form__button`} type="button">
        Rechercher
      </button>
    </form>
  );
}

export default FormFilters;
