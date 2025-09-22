import { Button } from 'antd';
import { useState } from 'react';

export const AnswerItem = ({
  id,
  content,
  isCorrect,
}: {
  id: string;
  content: string;
  isCorrect: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 1000;

  if (content.length <= MAX_LENGTH) {
    return (
      <div key={id} className='flex flex-col gap-0.5 !p-2 bg-gray-50 rounded-lg'>
        {isCorrect && (
          <p className='!px-1 !py-0.5 text-xs bg-green-100 text-green-800 rounded-full w-fit'>
            Correct
          </p>
        )}
        <p className='text-sm font-medium'>{content}</p>
      </div>
    );
  }
  return (
    <div key={id} className='flex flex-row gap-0.5 !p-2 bg-gray-50 rounded-lg'>
      {isCorrect && (
        <p className='!px-1 !py-0.5 text-xs bg-green-100 text-green-800 rounded-full w-fit'>
          Correct
        </p>
      )}
      {!isExpanded && <p className='text-sm font-medium truncate'>{content}</p>}
      {isExpanded && <p className='text-sm font-medium'>{content}</p>}

      <Button size='small' onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Show less' : 'Show more'}
      </Button>
    </div>
  );
};
