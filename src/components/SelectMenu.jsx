const SelectMenu = ({ label, data, labelKey, valueKey }) => {
  return (
    <div>
      <label className='my-2 block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <select className='w-full rounded-md border-2 border-gray-200 bg-gray-100 py-2 pl-4'>
        {data.map((item, index) => (
          <option key={index} value={item[valueKey]}>
            {item[labelKey]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectMenu;
