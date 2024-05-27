import { useState } from 'react';
import { useSelector } from 'react-redux';

import EmployeeTable from '@/components/EmployeeTable';
import SearchBar from '@/components/SearchBar';
import Container from '@/ui/Container';
import Title from '@/ui/Title';

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
    <Container>
      <Title title='Current Employees' />
      <SearchBar handleChange={handleChange} searchTerm={searchTerm} />
      <EmployeeTable employees={filteredEmployees} />
    </Container>
  );
};

export default Employees;
