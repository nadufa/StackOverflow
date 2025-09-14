import { LoginForm } from './LoginForm';

export const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 h-full w-xl'>
      <h1 className='text-3xl font-bold text-gray-800'>Sign in</h1>
      <LoginForm />
    </div>
  );
};
