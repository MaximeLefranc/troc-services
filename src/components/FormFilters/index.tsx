import './styles.scss';

function FormFilters() {
  return (
    <form className="form">
      <input className="form__input--service" placeholder="Un service ..." />
      <input className="form__input--zip" placeholder="Où ..." />
      <button className="form__button" type="button">
        Rechercher
      </button>
    </form>
  );
}

export default FormFilters;
