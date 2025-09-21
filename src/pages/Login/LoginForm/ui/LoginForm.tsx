import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../../app/routing';
import { loginSchema, type LoginFormType } from '../model';

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormType>({
    defaultValues: { username: '', password: '' },
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
  });

  const navigate = useNavigate();

  const submit = (data: LoginFormType) => {
    console.log('LoginForm ', data);
    reset();
    navigate(RoutePath.BASE);
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

      <Button size='large' type='primary' htmlType='submit' className='!mt-3'>
        Submit
      </Button>

      <div className='text-center text-base text-gray-600'>
        Don't have an account yet?{' '}
        <Link
          to={RoutePath.REGISTER}
          className='text-blue-600 hover:text-blue-800 hover:underline transition-colors'
        >
          Sign up
        </Link>
      </div>
    </form>
  );
};
