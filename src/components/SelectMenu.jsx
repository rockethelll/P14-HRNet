import React from 'react';

const SelectMenu = React.forwardRef(
  ({ label, data, labelKey, valueKey, value, ...rest }, ref) => {
    return (
      <div>
        <label className='my-2 block text-sm font-medium text-gray-700'>
          {label}
        </label>
        <select
          ref={ref}
          className='w-full rounded-md border-2 border-gray-200 bg-gray-100 py-2 pl-4'
          value={value}
          {...rest}
        >
          {data.map((item, index) => (
            <option key={index} value={item[valueKey]}>
              {item[labelKey]}
            </option>
          ))}
        </select>
      </div>
    );
  },
);

SelectMenu.displayName = 'SelectMenu';

export default SelectMenu;
