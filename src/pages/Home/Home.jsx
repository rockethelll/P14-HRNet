import Button from '@/ui/Button/Button';
import Input from '@/ui/Input/Input';

const Home = () => {
  return (
    <div className='container mx-auto flex max-w-screen-xl flex-col justify-center px-4 py-4 sm:px-6 lg:px-8'>
      <h1 className='mb-16 text-center font-bold text-lime-700 md:text-2xl lg:text-3xl'>
        Create Employee
      </h1>

      <form className='grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:gap-x-8'>
        <div className='relative space-y-6 space-y-reverse rounded-md p-2 pb-2'>
          <span></span>
          <Input label='First Name' />
          <Input label='Last Name' />
          <Input label='Date of Birth' />
          <Input label='Start Date' />
        </div>
        <div className='relative space-y-6 space-y-reverse rounded-md border-2 p-3'>
          <span className='absolute left-20 top-[-15px] bg-white px-2 font-bold text-lime-700'>
            Address
          </span>
          <Input label='Street' />
          <Input label='City' />
          <Input label='State' />
          <Input label='Zip Code' />
        </div>
        <div className='col-span-2 grid grid-cols-1 px-2'>
          <Input label='Department' />
        </div>
        <div className='col-span-1 mt-8 flex justify-center md:col-span-2'>
          <Button title='Save' />
        </div>
      </form>
    </div>
  );
};

export default Home;
