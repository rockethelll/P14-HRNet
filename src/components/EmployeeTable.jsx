import { useState } from 'react';

import EmployeeHead from '@/components/EmployeeHead';
import EmployeeRow from '@/components/EmployeeRow';
import EntriesInfo from '@/components/EntriesInfos';
import Paginate from '@/ui/Paginate';

const EmployeeTable = ({ employees }) => {
  // state for current page
  const [currentPage, setCurrentPage] = useState(1);

  // Number of employees to display per page
  const perPage = 10;

  // Calculation of the start and end index based on the current page
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  // Extract employees to display on the current page
  const currentEmployees = employees.slice(startIndex, endIndex);

  return (
    <div>
      <table className='w-full table-auto'>
        <EmployeeHead />
        <tbody className='border-y-2 border-black'>
          {employees.length > 0 ? (
            currentEmployees.map((employee, index) => (
              <EmployeeRow
                key={index}
                employee={employee}
                index={startIndex + index}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan='9'
                className='border-y border-black bg-gray-100 px-4 py-3 text-center font-semibold'
              >
                No matching data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className='flex items-center justify-between'>
        <EntriesInfo
          currentPage={currentPage}
          totalItems={employees.length}
          perPage={perPage}
        />
        <Paginate
          currentPage={currentPage}
          totalItems={employees.length}
          perPage={perPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default EmployeeTable;
