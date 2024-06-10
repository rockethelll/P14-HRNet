import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const EmployeeTable = ({ employees }) => {
  const columns = [
    {
      field: 'firstName',
      headerName: 'First Name',
      minWidth: 130,
      headerClassName: 'bg-green-700 text-white',
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      minWidth: 130,
      headerClassName: 'bg-green-700 text-white',
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      width: 120,
      headerClassName: 'bg-green-700 text-white',
    },
    {
      field: 'department',
      headerName: 'Department',
      width: 150,
      flex: 0.7,
      headerClassName: 'bg-green-700 text-white',
    },
    {
      field: 'dateOfBirth',
      headerName: 'Date of Birth',
      width: 120,
      headerClassName: 'bg-green-700 text-white font-bold',
    },
    {
      field: 'street',
      headerName: 'Street',
      width: 220,
      flex: 1,
      headerClassName: 'bg-green-700 text-white',
    },
    {
      field: 'city',
      headerName: 'City',
      minWidth: 120,
      flex: 0.5,
      headerClassName: 'bg-green-700 text-white',
    },
    {
      field: 'state',
      headerName: 'State',
      width: 70,
      headerClassName: 'bg-green-700 text-white',
    },
    {
      field: 'zipCode',
      headerName: 'Zip Code',
      width: 100,
      headerClassName: 'bg-green-700 text-white',
    },
  ];

  return (
    <div>
      <DataGrid
        style={{ width: '100%' }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10, page: 0 } },
        }}
        // autoHeight
        rows={employees}
        columns={columns}
        getRowId={(row) =>
          `${row.firstName}-${row.lastName}-${row.dateOfBirth}`
        }
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
