import Button from '@/ui/Button/Button';

const ErrorPage = () => {
  return (
    <div className='container mt-20 flex flex-col items-center gap-20'>
      <p className='text-2xl font-bold text-lime-700'>
        Error 404 page not found
      </p>
      <Button location='/' title='Back to home page' />
    </div>
  );
};

export default ErrorPage;
