import { useState } from 'react';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

interface MultiselectProps {
  placeholder: string;
  MultiselectItems?: { id: string; name: string }[];
  required?: boolean;
  register: Function;
  name: string;
  errors?: { [x: string]: any };
}

const Multiselect = ({
  placeholder,
  MultiselectItems,
  register,
  name,
  errors,
  required,
}: MultiselectProps) => {
  const [marketFilter, setMarketFilter] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (item: string) => {
    const currentIndex = marketFilter.indexOf(item);
    const newFilters = [...marketFilter];

    if (currentIndex === -1) {
      newFilters.push(item);
    } else {
      newFilters.splice(currentIndex, 1);
    }
    setMarketFilter(newFilters);
  };

  return (
    <div className='multiselect'>
      <input
        className={`multiselect__inner ${
          errors && errors[name] ? '--error' : ''
        }`}
        placeholder={placeholder}
        defaultValue={selectValue}
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
            setSelectValue(marketFilter);
          }}
        >
          <Button className='multiselect__button'>Применить</Button>
        </button>
      </div>
    </div>
  );
};
export { Multiselect };
