import Button from '@/ui/Button/Button';
import Input from '@/ui/Input/Input';

const Home = () => {
  return (
    <div className='container mx-auto flex max-w-screen-xl flex-col justify-center px-4 py-4 sm:px-6 lg:px-8'>
      <h1 className='mb-16 text-center font-bold text-lime-700 md:text-2xl lg:text-3xl'>
        Create Employee
      </h1>

      <form className='grid grid-cols-1 gap-x-4 sm:grid-cols-2 lg:gap-x-8'>
        <div className='relative space-y-6 space-y-reverse rounded-md p-2 pb-2'>
          <span></span>
          <Input label='First Name' />
          <Input label='Last Name' />
          <Input label='Date of Birth' type='date' />
          <Input label='Start Date' type='date' />
        </div>
        <div className='relative space-y-6 space-y-reverse rounded-md border-2 p-3'>
          <span className='absolute left-20 top-[-15px] bg-white px-2 font-bold text-lime-700'>
            Address
          </span>
          <Input label='Street' />
          <Input label='City' />
          <div>
            <label className='my-2 block text-sm font-medium text-gray-700'>
              State
            </label>
            <select className='w-full rounded-md border-2 border-gray-200 bg-gray-100 py-2 pl-4'>
              <option value='AL'>Alabama</option>
              <option value='CA'>California</option>
              <option value='NY'>New York</option>
            </select>
          </div>
          <Input label='Zip Code' />
        </div>
        <div className='col-span-1 grid px-2 sm:col-span-2'>
          <div>
            <label className='my-2 block text-sm font-medium text-gray-700'>
              Department
            </label>
            <select className='w-full rounded-md border-2 border-gray-200 bg-gray-100 py-2 pl-4'>
              <option value='AL'>Sales</option>
              <option value='CA'>Engineering</option>
              <option value='NY'>Legal</option>
            </select>
          </div>
        </div>
        <div className='col-span-1 mt-8 flex justify-center sm:col-span-2'>
          <Button title='Save' />
        </div>
      </form>
    </div>
  );
};

export default Home;
