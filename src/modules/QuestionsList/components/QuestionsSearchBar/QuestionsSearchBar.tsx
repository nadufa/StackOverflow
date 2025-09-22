import { Input, Radio } from 'antd';
import { useQuestionsSettingsStore } from '../../model/questionsStore';

const { Search } = Input;

export const QuestionsSearchBar = () => {
  const { searchState, setSearchInput, setSortByValue, setSortDirectionValue } =
    useQuestionsSettingsStore();

  return (
    <div className='flex flex-row gap-4 w-full'>
      <Search
        type='primary'
        className='flex-1'
        placeholder='Search questions'
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
        <Radio.Button value='title'>title</Radio.Button>
        <Radio.Button value='id'>id</Radio.Button>
        <Radio.Button value='description'>description</Radio.Button>
        <Radio.Button value='attachedCode'>attached code</Radio.Button>
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
