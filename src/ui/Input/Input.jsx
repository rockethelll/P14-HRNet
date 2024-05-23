const Input = ({ label, type }) => {
  return (
    <div className='input-wrapper'>
      <label className='block text-xs font-medium text-gray-700'>{label}</label>

      <input
        type={type || 'text'}
        className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
      />
    </div>
  );
};

export default Input;
