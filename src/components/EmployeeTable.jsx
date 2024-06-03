import { DataGrid } from '@mui/x-data-grid';
import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

const EmployeeTable = ({ employees }) => {
  const columns = [
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last Name', width: 130 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', width: 110 },
    { field: 'startDate', headerName: 'Start Date', width: 110 },
    { field: 'street', headerName: 'Street', width: 200 },
    { field: 'city', headerName: 'City', width: 160 },
    { field: 'zipCode', headerName: 'Zip Code', width: 80 },
    { field: 'state', headerName: 'State', width: 50 },
    { field: 'department', headerName: 'Department', width: 150 },
  ];

  // Generate UUIDs once for each employee
  const employeesWithIds = useMemo(() => {
    return employees.map((employee) => ({
      ...employee,
      id: uuidv4(),
    }));
  }, [employees]);

  return (
    <div>
      <DataGrid
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
        autoHeight
        rows={employeesWithIds}
        columns={columns}
        getRowId={(row) => row.id}
        pageSizeOptions={[10, 25, 50, 100]}
      />
    </div>
  );
};

export default EmployeeTable;
