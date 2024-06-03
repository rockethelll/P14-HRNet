const SearchBar = ({ searchTerm, handleChange }) => {
  return (
    <div className='flex items-center justify-end'>
      <label className='pr-3'>Search</label>
      <input
        type='search'
        className='w-[300px] rounded border border-gray-300 bg-gray-100 px-2 py-1'
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
