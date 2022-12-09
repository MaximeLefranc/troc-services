import { ChangeEvent } from 'react';

interface FieldPropsInscription {
  label: string;
  required: boolean;
  id: string;
  type: string;
  name: string;
  placeholder: string;
  className: string;
  classNameLabel?: string;
  accept?: string;
  pattern?: string;
  onChange: (value: string, nameInput: string) => void;
}

function FieldInscription({
  label,
  required,
  id,
  type,
  name,
  placeholder,
  className,
  classNameLabel = 'inscription__form__label',
  accept,
  pattern,
  onChange,
}: FieldPropsInscription): JSX.Element {
  const handleChangeValueInState = (evt: ChangeEvent): void => {
    const value = (evt.target as HTMLInputElement).value;
    onChange(value, name);
  };
  return (
    <label className={classNameLabel}>
      {label}
      <input
        required={required}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        accept={accept}
        pattern={pattern}
        onChange={handleChangeValueInState}
      />
    </label>
  );
}

export default FieldInscription;
