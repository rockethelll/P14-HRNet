import { Route, Routes } from 'react-router-dom';

import Employees from '@/pages/Employees';
import ErrorPage from '@/pages/ErrorPage';
import Home from '@/pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/employees' element={<Employees />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
