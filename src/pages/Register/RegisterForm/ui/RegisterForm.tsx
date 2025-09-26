import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../../../app/routing';
import { useRegister } from '../api';
import { registerSchema, type RegisterFormType } from '../model';

export const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormType>({
    defaultValues: { username: '', password: '', confirmPassword: '' },
    resolver: zodResolver(registerSchema),
    mode: 'onSubmit',
  });

  const { mutate, isPending, isError } = useRegister({ reset });

  const submit = (data: RegisterFormType) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-5 mx-auto w-full max-w-md'>
      <div className='relative flex flex-col gap-1'>
        <label htmlFor='username' className='text-gray-700 font-medium'>
          Username
        </label>
        <Controller
          name='username'
          control={control}
          render={({ field }) => <Input size='large' id='username' {...field} />}
        />
        {errors.username && (
          <span className='absolute text-red-500 top-full text-sm'>{errors.username.message}</span>
        )}
      </div>

      <div className='relative flex flex-col gap-1'>
        <label htmlFor='password' className='text-gray-700 font-medium'>
          Password
        </label>
        <Controller
          name='password'
          control={control}
          render={({ field }) => <Input.Password size='large' id='password' {...field} />}
        />
        {errors.password && (
          <span className='absolute text-red-500 top-full text-sm'>{errors.password.message}</span>
        )}
      </div>

      <div className='relative flex flex-col gap-1'>
        <label htmlFor='confirmPassword' className='text-gray-700 font-medium'>
          Confirm password
        </label>
        <Controller
          name='confirmPassword'
          control={control}
          render={({ field }) => <Input.Password size='large' id='confirmPassword' {...field} />}
        />
        {errors.confirmPassword && (
          <span className='absolute text-red-500 top-full text-sm'>
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <div className='relative flex flex-col gap-1'>
        <Button
          size='large'
          type='primary'
          htmlType='submit'
          className='!mt-3'
          disabled={isPending}
          loading={isPending}
        >
          Submit
        </Button>
        {isError && (
          <span className='absolute text-red-500 top-full text-sm'>
            User with this username already exists!
          </span>
        )}
      </div>

      <div className='text-center text-base text-gray-600'>
        Already have an account?{' '}
        <Link
          to={RoutePath.LOGIN}
          className='text-blue-600 hover:text-blue-800 hover:underline transition-colors'
        >
          Sign in
        </Link>
      </div>
    </form>
  );
};
