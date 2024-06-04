import { useSelector } from 'react-redux';

import EmployeeTable from '@/components/EmployeeTable';
import Container from '@/ui/Container';
import Title from '@/ui/Title';

const Employees = () => {
  const employees = useSelector((state) => state.employee.employees);

  return (
    <Container>
      <Title title='Current Employees' />
      <EmployeeTable employees={employees} />
    </Container>
  );
};

export default Employees;
