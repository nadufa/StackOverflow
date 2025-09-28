import { RoutePath } from '@/app/routing';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useLogin } from '../api';
import { loginSchema, type LoginFormType } from '../model';

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm<LoginFormType>({
    defaultValues: { username: '', password: '' },
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
  });

  const { mutate, isPending } = useLogin({
    reset,
    onError: (errorMessage: string) => {
      setError('root', { message: errorMessage });
    },
  });

  const submit = (data: LoginFormType) => {
    mutate(data);
  };

  const handleInputChange = () => {
    if (errors.root) {
      clearErrors('root');
    }
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
          render={({ field }) => (
            <Input
              size='large'
              id='username'
              {...field}
              onChange={(e) => {
                field.onChange(e);
                handleInputChange();
              }}
            />
          )}
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
          render={({ field }) => (
            <Input.Password
              size='large'
              id='password'
              {...field}
              onChange={(e) => {
                field.onChange(e);
                handleInputChange();
              }}
            />
          )}
        />
        {errors.password && (
          <span className='absolute text-red-500 top-full text-sm'>{errors.password.message}</span>
        )}
      </div>

      <div className='relative flex flex-col gap-1'>
        {errors.root && <span className='text-red-500 text-sm'>{errors.root.message}</span>}
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
      </div>

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
