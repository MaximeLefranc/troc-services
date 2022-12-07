import { ChangeEvent } from 'react';

interface PropLogInForm {
  value: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: (value: string, nameSateInput: string) => void;
}

function Field({
  value,
  type,
  name,
  placeholder,
  onChange,
}: PropLogInForm): JSX.Element {
  const handleChange = (evt: ChangeEvent): void => {
    const valueInput = (evt.target as HTMLInputElement).value;
    onChange(valueInput, name);
  };
  const inputId = `field-${name}`;
  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />

      <label htmlFor={inputId} className="field-label">
        {placeholder}
      </label>
    </div>
  );
}

export default Field;
