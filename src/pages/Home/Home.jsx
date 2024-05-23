import Button from '@/ui/Button/Button';
import Input from '@/ui/Input/Input';

const Home = () => {
  return (
    <div className='container mx-auto flex max-w-screen-xl flex-col justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
      <h1 className='mb-6 text-center font-bold text-lime-700 md:text-2xl lg:text-3xl'>
        Create Employee
      </h1>

      <form className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8'>
        <div className='space-y-6'>
          <Input label='First Name' />
          <Input label='Last Name' />
          <Input label='Date of Birth' />
          <Input label='Start Date' />
        </div>
        <div className='space-y-6'>
          <Input label='Street' />
          <Input label='City' />
          <Input label='State' />
          <Input label='Zip Code' />
        </div>
        <div className='col-span-1 mt-8 flex justify-center md:col-span-2'>
          <Button title='Save' />
        </div>
      </form>
    </div>
  );
};

export default Home;
