import { useState } from 'react';

interface SelectProps {
  placeholder: string;
  selectItems?: { id: string; name: string }[];
  register: Function;
  required?: boolean;
  name: string;
  errors?: { [x: string]: any };
}

const Select = ({
  placeholder,
  selectItems,
  register,
  required,
  name,
  errors,
}: SelectProps) => {
  const [selectValue, setSelectValue] = useState('');
  return (
    <div className='select'>
      <input
        className={`select__inner ${errors && errors[name] ? '--error' : ''}`}
        placeholder={placeholder}
        value={selectValue}
        readOnly
        {...register(name, {
          required: required,
        })}
      />
      <div className='select__menu'>
        {selectItems?.map((item) => (
          <span
            className='select__option'
            key={item.id}
            onClick={() => setSelectValue(item.name)}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};
export { Select };
