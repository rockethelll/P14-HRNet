import { useState } from 'react';
import { useSelector } from 'react-redux';

import SearchBar from '@/components/SearchBar';

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const employees = useSelector((state) => state.employee.employees);

  // Filter employees based on search term
  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

  // Handle search input change
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='container mx-auto flex max-w-screen-xl flex-col justify-center px-4 py-4 sm:px-6 lg:px-8'>
      <h1 className='mb-16 text-center font-bold text-lime-700 md:text-2xl lg:text-3xl'>
        Current Employees
      </h1>
      <SearchBar handleChange={handleChange} searchTerm={searchTerm} />
      <table className='w-full table-auto'>
        <thead>
          <tr>
            <th className='px-4 py-2'>First Name</th>
            <th className='px-4 py-2'>Last Name</th>
            <th className='px-4 py-2'>Start Date</th>
            <th className='px-4 py-2'>Department</th>
            <th className='px-4 py-2'>Date of Birth</th>
            <th className='px-4 py-2'>Street</th>
            <th className='px-4 py-2'>City</th>
            <th className='px-4 py-2'>State</th>
            <th className='px-4 py-2'>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length > 0 ? (
            // Render filtered employees
            filteredEmployees.map((employee, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-gray-100' : ''} hover:bg-gray-200`}
              >
                {Object.entries(employee).map(([key, value], idx) => (
                  <td key={idx} className='border-y px-4 py-2'>
                    {key === 'state' ? value.toUpperCase() : value}
                  </td>
                ))}
              </tr>
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
    </div>
  );
};

export default Employees;
