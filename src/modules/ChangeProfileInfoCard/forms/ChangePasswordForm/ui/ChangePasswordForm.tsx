import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useChangePassword } from '../api/useChangePassword';
import { changePasswordSchema, type ChangePasswordFormType } from '../model';

export const ChangePasswordForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm<ChangePasswordFormType>({
    defaultValues: { oldPassword: '', newPassword: '', confirmNewPassword: '' },
    resolver: zodResolver(changePasswordSchema),
    mode: 'onSubmit',
  });

  const { mutate, isPending } = useChangePassword({
    reset,
    onError: (errorMessage: string) => {
      setError('root', { message: errorMessage });
    },
  });

  const submit = (data: ChangePasswordFormType) => {
    mutate({ oldPassword: data.oldPassword, newPassword: data.newPassword });
  };

  const handleInputChange = () => {
    if (errors.root) {
      clearErrors('root');
    }
  };

  return (
    <div className='flex flex-col gap-4 w-sm'>
      <h3 className='text-gray-700 font-medium'>Change your password:</h3>
      <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-4 mx-auto'>
        <div className='relative flex flex-col gap-0.5'>
          <Controller
            name='oldPassword'
            control={control}
            render={({ field }) => (
              <Input.Password
                placeholder='Old password'
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  handleInputChange();
                }}
              />
            )}
          />
          {errors.oldPassword && (
            <span className='absolute text-red-500 top-full text-xs'>
              {errors.oldPassword.message}
            </span>
          )}
        </div>

        <div className='relative flex flex-col gap-0.5'>
          <Controller
            name='newPassword'
            control={control}
            render={({ field }) => (
              <Input.Password
                placeholder='New password'
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  handleInputChange();
                }}
              />
            )}
          />
          {errors.newPassword && (
            <span className='absolute text-red-500 top-full text-xs'>
              {errors.newPassword.message}
            </span>
          )}
        </div>

        <div className='relative flex flex-col gap-0.5'>
          <Controller
            name='confirmNewPassword'
            control={control}
            render={({ field }) => (
              <Input.Password
                placeholder='Confirm new password'
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  handleInputChange();
                }}
              />
            )}
          />
          {errors.confirmNewPassword && (
            <span className='absolute text-red-500 top-full text-xs'>
              {errors.confirmNewPassword.message}
            </span>
          )}
        </div>

        {errors.root && <span className='text-red-500 text-xs'>{errors.root.message}</span>}

        <Button
          type='primary'
          htmlType='submit'
          className='!mt-2 !bg-[green]'
          disabled={isPending}
          loading={isPending}
        >
          Change password
        </Button>
      </form>
    </div>
  );
};
