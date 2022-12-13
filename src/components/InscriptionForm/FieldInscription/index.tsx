import { ChangeEvent } from 'react';

interface FieldPropsInscription {
  label: string;
  required: boolean;
  id: string;
  name: string;
  placeholder: string;
  className: string;
  type?: string;
  classNameLabel?: string;
  accept?: string;
  pattern?: string;
  isTextArea?: boolean;
  onChange: (value: string | File, nameInput: string) => void;
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
  isTextArea = false,
}: FieldPropsInscription): JSX.Element {
  const handleChangeValueInState = (evt: ChangeEvent): void => {
    if (name === 'picture') {
      const picture = (evt.target as HTMLInputElement).files;
      if (picture instanceof FileList) {
        if (picture[0]) {
          console.log(picture[0]);
          onChange(picture[0], name);
        } else {
          onChange('', name);
        }
      }
    } else {
      const value = (evt.target as HTMLInputElement).value;
      onChange(value, name);
    }
  };
  if (required) {
    label = `${label} *`;
  }
  if (isTextArea) {
    return (
      <label className={classNameLabel}>
        {label}
        <textarea
          required={required}
          id={id}
          name={name}
          placeholder={placeholder}
          className={className}
          onChange={handleChangeValueInState}
          rows={4}
        />
      </label>
    );
  }
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