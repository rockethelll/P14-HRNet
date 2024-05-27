const EmployeeRow = ({ employee, index }) => {
  return (
    <tr className={`${index % 2 === 0 ? 'bg-gray-100' : ''} hover:bg-gray-200`}>
      {Object.entries(employee).map(([key, value], idx) => (
        <td key={idx} className='border-y px-4 py-2'>
          {key === 'state' ? value.toUpperCase() : value}
        </td>
      ))}
    </tr>
  );
};

export default EmployeeRow;
