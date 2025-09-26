import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';
import { useChangeUsername } from '../api/useChangeUsername';
import { changeUsernameSchema, type ChangeUsernameFormType } from '../model';

type ProtectedContext = {
  authUserId: string;
  authUserUsername: string;
};

export const ChangeUsernameForm = () => {
  const { authUserId } = useOutletContext<ProtectedContext>();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChangeUsernameFormType>({
    defaultValues: { newUsername: '' },
    resolver: zodResolver(changeUsernameSchema),
    mode: 'onSubmit',
  });

  const { mutate, isPending } = useChangeUsername({
    reset,
    authUserId,
  });

  const submit = (data: ChangeUsernameFormType) => {
    mutate(data.newUsername);
    reset();
  };

  return (
    <div className='flex flex-col gap-2 w-sm'>
      <h3 className='text-gray-700 font-medium'>Change your username:</h3>
      <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-3 mx-auto'>
        <div className='relative flex flex-col gap-0.5'>
          <Controller
            name='newUsername'
            control={control}
            render={({ field }) => <Input placeholder='New username' {...field} />}
          />
          {errors.newUsername && (
            <span className='absolute text-red-500 top-full text-xs'>
              {errors.newUsername.message}
            </span>
          )}
        </div>

        <Button
          type='primary'
          htmlType='submit'
          className='!mt-2 !bg-[green]'
          loading={isPending}
          disabled={isPending}
        >
          Change username
        </Button>
      </form>
    </div>
  );
};
