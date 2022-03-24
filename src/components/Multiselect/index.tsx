interface MultiselectProps {
  placeholder: string;
}

const Multiselect = ({ placeholder }: MultiselectProps) => {
  return (
    <div className='input'>
      <input className='input__inner'></input>
      <label className='input__label'>{placeholder}</label>
    </div>
  );
};
export { Multiselect };
