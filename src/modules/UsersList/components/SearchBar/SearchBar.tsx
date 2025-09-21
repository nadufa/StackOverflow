import { Input, Radio } from 'antd';

const { Search } = Input;

export const SearchBar = () => {
  return (
    <div className='flex flex-row gap-4 w-full'>
      <Search className='flex-1' placeholder='Search users' enterButton size='large' />
      <Radio.Group defaultValue='username' buttonStyle='solid' size='large'>
        <Radio.Button value='id'>id</Radio.Button>
        <Radio.Button value='username'>username</Radio.Button>
        <Radio.Button value='role'>role</Radio.Button>
      </Radio.Group>
      <Radio.Group defaultValue='asc' buttonStyle='solid' size='large'>
        <Radio.Button value='asc'>asc</Radio.Button>
        <Radio.Button value='desc'>desc</Radio.Button>
      </Radio.Group>
    </div>
  );
};
