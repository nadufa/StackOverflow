import { ChangePasswordForm, ChangeUsernameForm } from './forms';

export const ChangeProfileInfoCard = () => {
  return (
    <div className='flex flex-col items-center !p-6 border-2 border-gray-200 rounded-lg bg-white gap-3 w-full'>
      <h2 className='text-medium self-start text-gray-500 underline decoration-gray-300 pb-2 mb-4'>
        Edit your profile:
      </h2>
      <div className='flex gap-6 justify-between w-full'>
        <ChangeUsernameForm />
        <ChangePasswordForm />
      </div>
    </div>
  );
};
