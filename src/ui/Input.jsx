import React from 'react';

const Input = React.forwardRef(
  ({ label, type = 'text', error, ...rest }, ref) => {
    const handleBlur = (event) => {
      if (type === 'date') {
        const value = event.target.value;
        const date = new Date(value);
        if (!isNaN(date)) {
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          const year = date.getFullYear();
          event.target.value = `${month}/${day}/${year}`;
        }
      }
    };
    return (
      <div className='input-wrapper'>
        <label className='my-2 block text-sm font-medium text-gray-700'>
          {label}
        </label>
        <input
          type={type}
          className={`mt-1 w-full rounded-md border-2 py-2 pl-4 shadow-sm ${
            error ? 'border-red-500' : 'border-gray-200'
          }`}
          onBlur={handleBlur}
          ref={ref}
          {...rest}
        />
        {error && (
          <div className='mt-2 text-sm font-bold text-red-500'>
            {error.message}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
