import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useEditUsername } from '../api';
import { changeUsernameSchema, type ChangeUsernameFormType } from '../model';

export const ChangeUsernameForm = () => {
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

  const { mutate, isPending } = useEditUsername();

  const submit = (data: ChangeUsernameFormType) => {
    mutate({ username: data.newUsername });
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

        <Button loading={isPending} type='primary' htmlType='submit' className='!mt-2 !bg-[green]'>
          Change username
        </Button>
      </form>
    </div>
  );
};
