import Form from '@/components/Form/Form';

const Home = () => {
  return (
    <div className='container mx-auto flex max-w-screen-xl flex-col justify-center px-4 py-4 sm:px-6 lg:px-8'>
      <h1 className='mb-16 text-center font-bold text-lime-700 md:text-2xl lg:text-3xl'>
        Create Employee
      </h1>
      <Form />
    </div>
  );
};

export default Home;
