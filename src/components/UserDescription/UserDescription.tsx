interface IUserDescription {
  id: number | string;
  username: string;
  role: string;
}

export const UserDescription = ({ id, role, username }: IUserDescription) => {
  return (
    <>
      <h2 className='text-lg font-semibold truncate max-w-[150px]'>{username}</h2>
      <div className='flex flex-col tiny-gap'>
        <p className='text-sm font-semibold'>
          Id: <span className='text-sm font-semibold text-gray-500'>{id}</span>
        </p>
        <p className='text-sm font-semibold'>
          Role: <span className='text-sm font-semibold text-gray-500'>{role}</span>
        </p>
      </div>
    </>
  );
};
