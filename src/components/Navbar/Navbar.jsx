import { useLocation } from 'react-router';

import Button from '@/ui/Button/Button';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <div className='flex items-center text-center sm:text-left'>
          <img src='./images/HRnet.png' alt='HRnet logo' />
          <h1 className='ml-3 text-2xl font-bold text-gray-900 sm:text-3xl'>
            Bienvenue sur HRnet
          </h1>
        </div>

        <div className='mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center'>
          {currentPath === '/' ? (
            <Button location='/employees' title='Voir les employés actuels' />
          ) : (
            <Button location='/' title="Retour à l'accueil" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
