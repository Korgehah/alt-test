interface InputProps {
  placeholder: string;
}

const Input = ({ placeholder }: InputProps) => {
  return (
    <div className='input'>
      <input className='input__inner'></input>
      <label className='input__label'>{placeholder}</label>
    </div>
  );
};
export { Input };
