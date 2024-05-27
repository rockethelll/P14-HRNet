import EmployeeHead from '@/components/Form/EmployeeHead';

import EmployeeRow from './EmployeeRow';

const EmployeeTable = ({ employees }) => {
  return (
    <table className='w-full table-auto'>
      <EmployeeHead />
      <tbody>
        {employees.length > 0 ? (
          employees.map((employee, index) => (
            <EmployeeRow key={index} employee={employee} index={index} />
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
  );
};

export default EmployeeTable;
