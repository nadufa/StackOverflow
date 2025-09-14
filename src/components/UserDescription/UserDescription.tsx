interface IUserDescription {
  id: number;
  username: string;
  role: string;
}

const mockUserData: IUserDescription = {
  id: 3,
  username: 'Nadezhda',
  role: 'user',
};

export const UserDescription = () => {
  return (
    <>
      <h2 className='text-xl font-semibold'>{mockUserData.username}</h2>
      <div className='flex flex-col tiny-gap'>
        <p className='text-sm font-semibold'>
          Id: <span className='text-sm font-semibold text-gray-500'>{mockUserData.id}</span>
        </p>
        <p className='text-sm font-semibold'>
          Role: <span className='text-sm font-semibold text-gray-500'>{mockUserData.role}</span>
        </p>
      </div>
    </>
  );
};
