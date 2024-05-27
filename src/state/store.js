import { configureStore } from '@reduxjs/toolkit';

import employeeReducer from './employeeSlice';
import modalReducer from './modalSlice';

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    modal: modalReducer,
  },
});
