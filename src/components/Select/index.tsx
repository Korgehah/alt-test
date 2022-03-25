import { useState } from 'react';

interface SelectProps {
  placeholder: string;
  selectItems?: { id: string; name: string }[];
  register: Function;
  required?: boolean;
  name: string;
  errors?: { [x: string]: any };
  setValue: Function;
}

const Select = ({
  placeholder,
  selectItems,
  register,
  required,
  name,
  setValue,
  errors,
}: SelectProps) => {
  const [currentValue, setCurrentValue] = useState(placeholder);
  return (
    <div className='select'>
      <input
        className={`select__inner ${
          errors && errors[name] && currentValue === placeholder
            ? '--error'
            : ''
        }`}
        placeholder={placeholder}
        readOnly
        {...register(name, {
          required: required,
        })}
      />
      <div className='select__menu'>
        {selectItems?.map((item) => (
          <div
            className='select__option'
            key={item.id}
            onClick={() => {
              setValue(name, item.name);
              setCurrentValue(item.name);
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export { Select };
