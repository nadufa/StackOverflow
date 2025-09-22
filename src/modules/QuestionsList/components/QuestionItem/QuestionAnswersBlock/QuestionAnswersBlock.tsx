import { Button, Input } from 'antd';
import { useState } from 'react';
import { AnswerItem } from './AnswerItem';

export const QuestionAnswersBlock = ({
  answers,
}: {
  answers: {
    id: string;
    content: string;
    isCorrect: boolean;
  }[];
}) => {
  const [isAnswersOpen, setIsAnswersOpen] = useState(false);
  const [newAnswer, setNewAnswer] = useState('');

  const handleAddAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New answer:', newAnswer);
    setNewAnswer('');
  };

  return (
    <div className='flex flex-col gap-4 !py-1 w-full border-gray-200 border-t-2'>
      <button
        onClick={() => setIsAnswersOpen(!isAnswersOpen)}
        className='flex items-center justify-between w-full !p-2 hover:bg-gray-50 rounded-lg'
      >
        <span className='font-medium'>Answers ({answers.length})</span>
        <svg
          className={`w-4 h-4 transition-transform ${isAnswersOpen ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
      </button>

      {isAnswersOpen && (
        <div className='flex flex-col gap-2'>
          {answers.map(({ content, id, isCorrect }) => {
            return content.trim() ? (
              <AnswerItem key={id} id={id} content={content} isCorrect={isCorrect} />
            ) : null;
          })}

          <form onSubmit={handleAddAnswer} className='flex gap-2 !my-2'>
            <Input
              type='text'
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder='Your answer...'
            />
            <Button type='primary'>Add</Button>
          </form>
        </div>
      )}
    </div>
  );
};
