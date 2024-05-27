import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
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
