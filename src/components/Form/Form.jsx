import { zodResolver } from '@hookform/resolvers/zod';
import SelectMenu from '@rockethell/selectmenu';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import departments from '@/data/departments.json';
import states from '@/data/states.json';
import { createEmployee } from '@/state/employeeSlice';
import { openModal } from '@/state/modalSlice';
import Input from '@/ui/Input';

import { formSchema } from './formSchema';

const Form = () => {
  const dispatch = useDispatch();

  const {
    reset,
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    try {
      dispatch(createEmployee(data));
      reset();
      dispatch(openModal());
    } catch (error) {
      setError('root', {
        message: 'Error creating employee',
      });
    }
  };

  return (
    <form
      className='grid grid-cols-1 gap-x-4 sm:grid-cols-2 lg:gap-x-8'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='relative mt-1 space-y-6 space-y-reverse rounded-md p-2'>
        <span></span>
        <Input
          {...register('firstName')}
          label='First Name'
          error={errors.firstName}
        />
        <Input
          label='Last Name'
          error={errors.lastName}
          {...register('lastName')}
        />
        <Input
          label='Date of Birth'
          type='date'
          error={errors.dateOfBirth}
          {...register('dateOfBirth')}
        />
        <Input
          label='Start Date'
          type='date'
          error={errors.startDate}
          {...register('startDate')}
        />
      </div>
      <div className='relative mb-2 space-y-6 space-y-reverse rounded-md border-2 p-3'>
        <span className='absolute left-20 top-[-15px] bg-white px-2 font-bold text-lime-700'>
          Address
        </span>
        <Input label='Street' error={errors.street} {...register('street')} />
        <Input label='City' error={errors.city} {...register('city')} />
        <Controller
          name='state'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <SelectMenu
              label='States'
              data={states}
              valueKey='abbreviation'
              labelKey='name'
              {...field}
            />
          )}
        />
        {errors.state && (
          <div className='mt-2 text-sm font-bold text-red-500'>
            {errors.state.message}
          </div>
        )}
        <Input
          type='number'
          label='Zip Code'
          error={errors.zipCode}
          {...register('zipCode')}
        />
      </div>
      <div className='col-span-1 grid px-2 sm:col-span-2'>
        <Controller
          name='department'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <SelectMenu
              label='Departments'
              data={departments}
              valueKey='department'
              labelKey='department'
              {...field}
            />
          )}
        />
        {errors.department && (
          <div className='mt-2 text-sm font-bold text-red-500'>
            {errors.department.message}
          </div>
        )}
      </div>
      <div className='col-span-1 mt-8 flex justify-center sm:col-span-2'>
        <button
          className='block rounded-lg bg-lime-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-lime-800 focus:outline-none focus:ring'
          data-testid='submit-btn'
          type='submit'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Loading...' : 'Save'}
        </button>
      </div>
      {errors.root && (
        <div className='mt-2 text-sm text-red-500'>{errors.root.message}</div>
      )}
    </form>
  );
};

export default Form;
