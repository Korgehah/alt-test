import { useState } from 'react';

interface SelectProps {
  placeholder: string;
  selectItems?: { id: string; name: string }[];
}

const Select = ({ placeholder, selectItems }: SelectProps) => {
  const [selectValue, setSelectValue] = useState('');

  return (
    <div className='select'>
      <input
        className='select__inner'
        placeholder={placeholder}
        defaultValue={selectValue}
        readOnly
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
