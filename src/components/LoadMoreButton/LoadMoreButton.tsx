import type { UseInfiniteQueryResult } from '@tanstack/react-query';
import { Button, Spin } from 'antd';

type LoadMoreType = Pick<
  UseInfiniteQueryResult,
  'hasNextPage' | 'fetchNextPage' | 'isFetchingNextPage'
> & {
  isLoading?: boolean;
};

export const LoadMoreButton = ({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading = false,
}: LoadMoreType) => {
  if (isLoading) {
    return (
      <div className='w-full h-full flex justify-center py-4'>
        <Spin size='large' tip='Loading...' />
      </div>
    );
  }

  if (hasNextPage) {
    return (
      <Button
        type='primary'
        className='w-full'
        size='large'
        onClick={() => fetchNextPage()}
        loading={isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading more...' : 'Load more'}
      </Button>
    );
  }

  return null;
};
