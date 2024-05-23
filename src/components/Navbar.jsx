import { useLocation } from 'react-router';

import Button from '@/ui/Button';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className='mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-center justify-center sm:flex-row sm:justify-between'>
        <div className='flex items-center justify-center sm:justify-start'>
          <img src='./images/HRnet.png' alt='HRnet logo' />
          <h1 className='ml-3 text-2xl font-bold text-gray-900 sm:text-2xl lg:text-3xl'>
            Welcome to HRnet
          </h1>
        </div>

        <div className='mt-4 flex justify-center sm:mt-0'>
          {currentPath === '/' ? (
            <Button location='/employees' title='View Current Employees' />
          ) : (
            <Button location='/' title='Home' />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
