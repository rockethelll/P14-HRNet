import Button from '@/ui/Button/Button';

const ErrorPage = () => {
  return (
    <div className='container mt-20 flex flex-col items-center gap-20'>
      <p className='text-2xl font-bold text-lime-700'>
        Erreur 404 la page n'est pas trouvée
      </p>
      <Button location='/' title="Retourner sur la page d'accueil" />
    </div>
  );
};

export default ErrorPage;
