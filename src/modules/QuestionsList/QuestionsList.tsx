import { useDebounce } from 'use-debounce';
import { useStore } from 'zustand';
import { useGetQuestions } from './api';
import { QuestionItem, QuestionsSearchBar } from './components';
import { questionsStore } from './model';
import { LoadMoreButton } from '@/components/LoadMoreButton';

export const QuestionsList = () => {
  const searchState = useStore(questionsStore, (state) => state.searchState);

  const [debounced] = useDebounce(searchState.inputText, 1000);

  const { data, isFetching, isFetched, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetQuestions({
      ...searchState,
      inputText: debounced,
    });

  const isPlaceholderData = isFetching && !isFetched && !isFetchingNextPage;

  return (
    <div className='flex flex-col items-center gap-4 w-full'>
      <QuestionsSearchBar />
      <div className={`flex flex-col w-full gap-4 ${isPlaceholderData ? 'opacity-40' : ''}`}>
        {data?.map((el) => el.data.data.map((el) => <QuestionItem key={el.id} {...el} />))}
      </div>
      <LoadMoreButton
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        isLoading={isFetching && !isFetchingNextPage}
      />
    </div>
  );
};
