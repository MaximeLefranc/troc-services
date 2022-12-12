import { ChangeEvent } from 'react';

interface PropLogInForm {
  value: string;
  type: string;
  name: string;
  placeholder: string;
  onChangeHandle: (value: string, nameStateInput: string) => void;
}

function FieldLogIn({
  value,
  type,
  name,
  placeholder,
  onChangeHandle,
}: PropLogInForm): JSX.Element {
  const handleChange = (evt: ChangeEvent): void => {
    const valueInput = (evt.target as HTMLInputElement).value;
    onChangeHandle(valueInput, name);
  };
  const inputId = `field__${name}`;
  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field__input"
        placeholder={placeholder}
        name={name}
      />

      <label htmlFor={inputId} className="field__label">
        {placeholder}
      </label>
    </div>
  );
}

export default FieldLogIn;
