const EntriesInfos = ({ currentPage, totalItems, perPage }) => {
  // Calculate the first and last entry on the current page
  const firstEntry = (currentPage - 1) * perPage + 1;
  const lastEntry = Math.min(currentPage * perPage, totalItems);

  return (
    <div className='my-4 text-sm text-gray-700'>
      {totalItems === 0 ? (
        <span>Showing 0 to 0 of 0 entries</span>
      ) : (
        <span>
          Showing {firstEntry} to {lastEntry} of {totalItems} entries
        </span>
      )}
    </div>
  );
};

export default EntriesInfos;
