import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const EmployeeTable = ({ employees }) => {
  const columns = [
    {
      field: 'firstName',
      headerName: <strong>First Name</strong>,
      minWidth: 130,
      headerClassName: 'bg-green-700 text-white',
    },
    {
      field: 'lastName',
      headerName: <strong>Last Name</strong>,
      minWidth: 130,
      headerClassName: 'bg-green-700 text-white',
    },
    {
      field: 'startDate',
      headerName: <strong>Start Date</strong>,
      width: 120,
      headerClassName: 'bg-green-700 text-white',
    },
    {
      field: 'department',
      headerName: <strong>Department</strong>,
      width: 150,
      flex: 0.7,
      headerClassName: 'bg-green-700 text-white',
    },
    {
      field: 'dateOfBirth',
      headerName: <strong>Date of Birth</strong>,
      width: 120,
      headerClassName: 'bg-green-700 text-white font-bold',
    },
    {
      field: 'street',
      headerName: <strong>Street</strong>,
      width: 220,
      flex: 1,
      headerClassName: 'bg-green-700 text-white',
    },
    {
      field: 'city',
      headerName: <strong>City</strong>,
      minWidth: 120,
      flex: 0.5,
      headerClassName: 'bg-green-700 text-white',
    },
    {
      field: 'state',
      headerName: <strong>State</strong>,
      width: 70,
      headerClassName: 'bg-green-700 text-white',
    },
    {
      field: 'zipCode',
      headerName: <strong>Zip Code</strong>,
      width: 100,
      headerClassName: 'bg-green-700 text-white',
    },
  ];

  return (
    <div>
      <DataGrid
        style={{ width: '100%' }}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
        autoHeight
        rows={employees}
        columns={columns}
        getRowId={(row) => `${row.firstName}-${row.lastName}-${row.birthDate}`}
        pageSizeOptions={[10, 25, 50, 100]}
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            printOptions: { disableToolbarButton: true },
            csvOptions: { disableToolbarButton: true },
          },
        }}
      />
    </div>
  );
};

export default EmployeeTable;
