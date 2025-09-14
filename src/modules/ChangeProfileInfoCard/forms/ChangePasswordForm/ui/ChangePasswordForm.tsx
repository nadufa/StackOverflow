import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { changePasswordSchema, type ChangePasswordFormType } from '../model';

export const ChangePasswordForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChangePasswordFormType>({
    defaultValues: { oldPassword: '', newPassword: '', confirmNewPassword: '' },
    resolver: zodResolver(changePasswordSchema),
    mode: 'onSubmit',
  });

  const submit = (data: ChangePasswordFormType) => {
    console.log('ChangePasswordForm ', data);
    reset();
  };

  return (
    <div className='flex flex-col gap-2 w-sm'>
      <h3 className='text-gray-700 font-medium'>Change your password:</h3>
      <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-3 mx-auto'>
        <div className='flex flex-col gap-0.5'>
          <Controller
            name='oldPassword'
            control={control}
            render={({ field }) => <Input.Password placeholder='Old password' {...field} />}
          />
          {errors.oldPassword && (
            <span className='text-red-500 text-xs'>{errors.oldPassword.message}</span>
          )}
        </div>

        <div className='flex flex-col gap-0.5'>
          <Controller
            name='newPassword'
            control={control}
            render={({ field }) => <Input.Password placeholder='New password' {...field} />}
          />
          {errors.newPassword && (
            <span className='text-red-500 text-xs'>{errors.newPassword.message}</span>
          )}
        </div>

        <div className='flex flex-col gap-0.5'>
          <Controller
            name='confirmNewPassword'
            control={control}
            render={({ field }) => <Input.Password placeholder='Confirm new password' {...field} />}
          />
          {errors.confirmNewPassword && (
            <span className='text-red-500 text-xs'>{errors.confirmNewPassword.message}</span>
          )}
        </div>

        <Button type='primary' htmlType='submit' className='!mt-3 !bg-[green]'>
          Change password
        </Button>
      </form>
    </div>
  );
};
