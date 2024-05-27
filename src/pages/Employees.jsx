import { useSelector } from 'react-redux';

const Employees = () => {
  const employees = useSelector((state) => state.employee.employees);

  return (
    <div className='container mx-auto flex max-w-screen-xl flex-col justify-center px-4 py-4 sm:px-6 lg:px-8'>
      <h1 className='mb-16 text-center font-bold text-lime-700 md:text-2xl lg:text-3xl'>
        Current Employees
      </h1>
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
          {employees.length > 0 ? (
            employees.map((employee, index) => (
              <tr
                key={employee.id}
                className={index % 2 === 0 ? 'bg-gray-100' : ''}
              >
                <td className='border-y px-4 py-2'>{employee.firstName}</td>
                <td className='border-y px-4 py-2'>{employee.lastName}</td>
                <td className='border-y px-4 py-2'>{employee.startDate}</td>
                <td className='border-y px-4 py-2'>{employee.department}</td>
                <td className='border-y px-4 py-2'>{employee.dateOfBirth}</td>
                <td className='border-y px-4 py-2'>{employee.street}</td>
                <td className='border-y px-4 py-2'>{employee.city}</td>
                <td className='border-y px-4 py-2'>{employee.state}</td>
                <td className='border-y px-4 py-2'>{employee.zipCode}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan='9'
                className='border-y border-black bg-gray-100 px-4 py-3 text-center font-semibold'
              >
                No data available in table
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
