import { useState } from 'react';

const regExpName = /^[.а-яА-ЯёЁa-zA-Z\s]+$/;
const regExpEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regExpPosition = /^[.а-яА-ЯёЁ0-9a-zA-Z\s]+$/;
const regExpCompany = /^[-(")',.«»а-яА-ЯёЁa-zA-Z0-9\s]+$/;

const validationFunction = (
  value: string,
  validationType?: string,
  required?: boolean
) => {
  if (required === false) if (value.length < 1) return true;
  switch (validationType) {
    case 'company':
      return regExpCompany.test(value);
    case 'name':
      return regExpName.test(value);
    case 'email':
      return regExpEmail.test(value);
    case 'position':
      return regExpPosition.test(value);
    default:
      return true;
  }
};

interface InputProps {
  placeholder: string;
  register: Function;
  errors: { [x: string]: any };
  required?: boolean;
  name: string;
  validationType?: string;
  errorText?: string;
}

const Input = ({
  placeholder,
  register,
  errors,
  required,
  name,
  validationType,
  errorText,
}: InputProps) => {
  const [activeInput, setActiveInput] = useState(false);
  return (
    <div className='input'>
      <input
        className={`input__inner ${errors && errors[name] ? '--error' : ''}`}
        {...register(name, {
          required: required,
          validate: (value: string) =>
            validationFunction(value, validationType, required),
        })}
        onFocus={() => setActiveInput(true)}
      />
      <label
        className={`input__label ${errors && errors[name] ? '--error' : ''} ${
          activeInput ? '--active' : ''
        }`}
      >
        {errors && errors[name] ? errorText : placeholder}
      </label>
    </div>
  );
};
export { Input };
