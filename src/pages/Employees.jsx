import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import EmployeeTable from '@/components/EmployeeTable';
import Container from '@/ui/Container';
import Title from '@/ui/Title';

const Employees = () => {
  const employees = useSelector((state) => state.employee.employees);

  const memoizedEmployees = useMemo(() => employees, [employees]);

  return (
    <Container>
      <Title title='Current Employees' />
      <EmployeeTable employees={memoizedEmployees} />
    </Container>
  );
};

export default Employees;
