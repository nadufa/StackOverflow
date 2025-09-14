import { RegisterForm } from './RegisterForm';

export const Register = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 h-full w-xl'>
      <h1 className='text-3xl font-bold text-gray-800 !mb-10'>Sign up</h1>
      <RegisterForm />
    </div>
  );
};
