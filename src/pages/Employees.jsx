import { useState } from 'react';
import { useSelector } from 'react-redux';

import EmployeeTable from '@/components/EmployeeTable';
import SearchBar from '@/components/SearchBar';
import SelectEntriesDisplayed from '@/components/SelectEntriesDisplayed';
import Container from '@/ui/Container';
import Title from '@/ui/Title';

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const employees = useSelector((state) => state.employee.employees);

  // Filter employees based on search term in any field of the employee object
  const filteredEmployees = employees.filter((employee) =>
    Object.keys(employee).some(
      (key) =>
        typeof employee[key] === 'string' &&
        employee[key].toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

  // Handle search input change
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEntriesPerPageChange = (e) => {
    console.log(e);
  };

  return (
    <Container>
      <Title title='Current Employees' />
      <div className='mb-4 flex items-center justify-between'>
        <SelectEntriesDisplayed onChange={handleEntriesPerPageChange} />
        <SearchBar handleChange={handleChange} searchTerm={searchTerm} />
      </div>
      <EmployeeTable employees={filteredEmployees} />
    </Container>
  );
};

export default Employees;
