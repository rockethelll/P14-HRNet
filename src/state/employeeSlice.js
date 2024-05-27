import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [
    {
      firstName: 'Dora',
      lastName: 'Houston',
      dateOfBirth: '06/27/2014',
      startDate: '02/08/1998',
      street: 'Nisi atque accusamus',
      city: 'Et quasi et eum labo',
      zipCode: '22823',
      state: 'tx',
      department: 'Human Resources',
    },
    {
      firstName: 'Urielle',
      lastName: 'Washington',
      dateOfBirth: '02/06/2000',
      startDate: '09/29/1993',
      street: 'Cupiditate quia volu',
      city: 'Dolorem ab aut qui q',
      zipCode: '83019',
      state: 'wy',
      department: 'Sales',
    },
    {
      firstName: 'Miriam',
      lastName: 'Cardenas',
      dateOfBirth: '07/25/2019',
      startDate: '09/16/1980',
      street: 'Incidunt alias quis',
      city: 'Temporibus placeat ',
      zipCode: '50080',
      state: 'mt',
      department: 'Legal',
    },
    {
      firstName: 'Tarik',
      lastName: 'Hunter',
      dateOfBirth: '04/22/1985',
      startDate: '08/05/1992',
      street: 'Error id nobis aliq',
      city: 'Sed incididunt sit a',
      zipCode: '10348',
      state: 'tx',
      department: 'Engineering',
    },
  ],
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    createEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});

export const { createEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
