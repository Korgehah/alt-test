interface SelectProps {
  placeholder: string;
}

const Select = ({ placeholder }: SelectProps) => {
  return (
    <div className='select'>
      <input className='select__inner' placeholder={placeholder} />
      <div className='select__menu'>
        <span className='select__option'>1</span>
        <span className='select__option'>2</span>
        <span className='select__option'>3</span>
        <span className='select__option'>4</span>
        <span className='select__option'>5</span>
      </div>
    </div>
  );
};
export { Select };
