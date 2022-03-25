import React, { useRef, useState } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

interface MultiselectProps {
  placeholder: string;
  MultiselectItems?: { id: string; name: string }[];
  required?: boolean;
  register: Function;
  name: string;
  errors?: { [x: string]: any };
  setValue: Function;
}

const Multiselect = ({
  placeholder,
  MultiselectItems,
  register,
  name,
  errors,
  required,
  setValue,
}: MultiselectProps) => {
  const [filter, setFilter] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(placeholder);
  const ref = useRef<HTMLHeadingElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const handleToggle = (item: string) => {
    const currentIndex = filter.indexOf(item);
    const newFilters = [...filter];

    if (currentIndex === -1) {
      newFilters.push(item);
    } else {
      newFilters.splice(currentIndex, 1);
    }
    setFilter(newFilters);
  };

  return (
    <div className='multiselect ' ref={ref}>
      <input
        className={`multiselect__inner ${
          errors && errors[name] && currentValue === placeholder
            ? '--error'
            : ''
        }`}
        placeholder={placeholder}
        readOnly
        onClick={() => setIsOpen(!isOpen)}
        {...register(name, {
          required: required,
        })}
      />
      <div className={`multiselect__menu ${isOpen ? '--open' : ''}`}>
        {MultiselectItems?.map((item) => (
          <div
            className='multiselect__option'
            key={item.id}
            onChange={() => {
              handleToggle(item?.name);
            }}
          >
            <Checkbox inMultiselect>{item.name}</Checkbox>
          </div>
        ))}
        <button
          className='button-container multiselect__button-container'
          onClick={(event) => {
            event.preventDefault();
            setIsOpen(false);
            setCurrentValue(setValue(name, filter.join(', ')));
          }}
        >
          <Button className='multiselect__button'>Применить</Button>
        </button>
      </div>
    </div>
  );
};
export { Multiselect };
