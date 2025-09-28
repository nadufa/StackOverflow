import { Input, Radio } from 'antd';
import { useUsersSettingsStore } from '../../model/usersStore';

const { Search } = Input;

export const UsersSearchBar = () => {
  const { searchState, setSearchInput, setSortByValue, setSortDirectionValue } =
    useUsersSettingsStore();

  return (
    <div className='flex flex-row gap-4 w-full'>
      <Search
        type='primary'
        className='flex-1'
        placeholder='Search users'
        value={searchState.inputText}
        onChange={setSearchInput}
        enterButton
        size='large'
      />
      <Radio.Group
        value={searchState.sortByValue}
        onChange={setSortByValue}
        buttonStyle='solid'
        size='large'
      >
        <Radio.Button value='username'>username</Radio.Button>
        <Radio.Button value='id'>id</Radio.Button>
        <Radio.Button value='role'>role</Radio.Button>
      </Radio.Group>
      <Radio.Group
        value={searchState.sortDirectionValue}
        onChange={setSortDirectionValue}
        buttonStyle='solid'
        size='large'
      >
        <Radio.Button value='asc'>asc</Radio.Button>
        <Radio.Button value='desc'>desc</Radio.Button>
      </Radio.Group>
    </div>
  );
};
