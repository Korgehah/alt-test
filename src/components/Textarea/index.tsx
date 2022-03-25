import { useState } from 'react';

interface TextareaProps {
  placeholder: string;
  register: Function;
  name: string;
}

const Textarea = ({ placeholder, register, name }: TextareaProps) => {
  const [activeInput, setActiveInput] = useState(false);
  return (
    <div className='input'>
      <textarea
        className='input__inner textarea'
        {...register(name)}
        onFocus={() => setActiveInput(true)}
      />
      <label className={`textarea__label ${activeInput ? '--active' : ''}`}>
        {placeholder}
      </label>
    </div>
  );
};
export { Textarea };
