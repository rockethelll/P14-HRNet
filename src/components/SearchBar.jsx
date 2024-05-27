const SearchBar = ({ searchTerm, handleChange }) => {
  return (
    <div className='mb-4 flex items-center justify-end'>
      <label className='pr-3'>Search</label>
      <input
        type='search'
        className='rounded border px-2 py-1'
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
