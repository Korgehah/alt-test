import React from 'react';

interface CheckboxProps {
  children: React.ReactNode;
  smallText?: boolean;
  inMultiselect?: boolean;
}

const Checkbox = ({ children, smallText, inMultiselect }: CheckboxProps) => {
  return (
    <label className={`checkbox ${inMultiselect ? 'checkbox_big' : ''}`}>
      <input className='checkbox__field' type='checkbox' />
      <span
        className={`checkbox__inner ${
          smallText ? 'checkbox__inner_small' : ''
        }`}
      >
        <svg
          className='checkbox__symbol'
          width='10'
          height='8'
          viewBox='0 0 10 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.92162 1.39307L4.06868 6.09895L1.86279 3.95991'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        {children}
      </span>
    </label>
  );
};
export { Checkbox };
