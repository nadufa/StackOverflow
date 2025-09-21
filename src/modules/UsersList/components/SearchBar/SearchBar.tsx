import { Input, Radio } from 'antd';
import { useUsersSettingsStore } from '../../model/usersStore';

const { Search } = Input;

export const SearchBar = () => {
  const { searchState, setSearchInput, setSortByValue, setSortDirectionValue } =
    useUsersSettingsStore();

  return (
    <div className='flex flex-row gap-4 w-full'>
      <Search
        className='flex-1 [&_.ant-input-search-button]:!bg-(color:--primary-color)'
        placeholder='Search users'
        value={searchState.inputText}
        onChange={setSearchInput}
        enterButton
        size='large'
      />
      <Radio.Group
        className='
          [&_.ant-radio-button-wrapper-checked]:!bg-(color:--primary-color)
          [&_.ant-radio-button-wrapper-checked]:!text-white
          [&_.ant-radio-button-wrapper-checked]:!border-(color:--primary-color)
          [&_.ant-radio-button-wrapper-checked]:hover:brightness-110
          [&_.ant-radio-button-wrapper:not(.ant-radio-button-wrapper-checked):hover]:!text-(color:--primary-color)
          [&_.ant-radio-button-wrapper-checked:hover]:!text-white
        '
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
        className='
          [&_.ant-radio-button-wrapper-checked]:!bg-(color:--primary-color)
          [&_.ant-radio-button-wrapper-checked]:!text-white
          [&_.ant-radio-button-wrapper-checked]:!border-(color:--primary-color)
          [&_.ant-radio-button-wrapper-checked]:hover:brightness-110
          [&_.ant-radio-button-wrapper:not(.ant-radio-button-wrapper-checked):hover]:!text-(color:--primary-color)
          [&_.ant-radio-button-wrapper-checked:hover]:!text-white
        '
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
