const SelectEntriesDisplayed = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  const disabled = true;

  return (
    <div>
      <label htmlFor='total-entries-displayed'>Show</label>
      <select
        id='total-entries-displayed'
        className='mx-2 rounded bg-gray-100 px-2 py-2'
        onChange={handleChange}
        disabled={disabled}
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </select>
      <label htmlFor='total-entries-displayed'>entries</label>
    </div>
  );
};

export default SelectEntriesDisplayed;
