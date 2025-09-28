import { Input, Radio } from 'antd';
import { usePostsSettingsStore } from '../../model/postsStore';

const { Search } = Input;

export const PostsSearchBar = () => {
  const { searchState, setSearchInput, setSortByValue, setSortDirectionValue } =
    usePostsSettingsStore();

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
        <Radio.Button value='code'>code</Radio.Button>
        <Radio.Button value='id'>id</Radio.Button>
        <Radio.Button value='language'>language</Radio.Button>
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
