import React from 'react';

const Paginate = ({ currentPage, totalItems, perPage, onPageChange }) => {
  // Total number of pages
  const totalPages = Math.ceil(totalItems / perPage);

  // Function to to the previous page
  const goToPrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Function to go to the next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className='my-8'>
      <ol className='flex justify-center gap-1 text-xs font-medium'>
        {/* Button for previous page */}
        <li>
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`inline-flex size-8 items-center justify-center rounded border border-gray-200 bg-gray-100 text-gray-900 ${
              currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
            }`}
          >
            <span className='sr-only'>Prev Page</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-3 w-3'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </li>

        {/* Page number display  */}
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i}>
            <button
              onClick={() => onPageChange(i + 1)}
              className={`block text-center leading-8 ${
                currentPage === i + 1
                  ? 'size-8 rounded border-blue-600 bg-blue-600 text-white'
                  : 'size-8 rounded border border-gray-200 bg-gray-100  text-gray-900'
              }`}
            >
              {i + 1}
            </button>
          </li>
        ))}

        {/* Button for next page */}
        <li>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`inline-flex size-8 items-center justify-center rounded border-gray-200 bg-gray-100  text-gray-900 ${
              currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
            }`}
          >
            <span className='sr-only'>Next Page</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-3 w-3'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </li>
      </ol>
    </div>
  );
};

export default Paginate;
