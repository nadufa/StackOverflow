import { SmileFilled } from '@ant-design/icons';
import { Input } from 'antd';
import EmojiPicker, { type EmojiClickData } from 'emoji-picker-react';
import { useState } from 'react';
import { SendIcon } from '../../assets/svg';
import { CommentsList } from '../CommentsList';
import { PostItem } from '../PostsList/PostItem';

const { TextArea } = Input;

export const CreateComment = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [commentMessage, setCommentMessage] = useState<string | null>(null);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setCommentMessage((message) => (message += emojiData.emoji));
    setShowPicker(false);
  };

  const handleMessageTyping = (value: string) => {
    setCommentMessage(value);
  };

  return (
    <div className='flex flex-col gap-4 w-full'>
      <PostItem />
      <div className='flex flex-row gap-2 !mb-3'>
        <TextArea
          rows={5}
          placeholder='Your comment here'
          value={commentMessage ?? ''}
          onChange={(e) => handleMessageTyping(e.target.value)}
        />
        <div className='flex flex-col gap-2 !pt-3 !pb-3 justify-between'>
          <button
            onClick={() => setShowPicker((prev) => !prev)}
            className='px-2 py-1 rounded cursor-pointer'
          >
            <SmileFilled style={{ fontSize: 25 }} />
          </button>

          {showPicker && (
            <div className='absolute right-0 !mt-7 z-50' style={{ position: 'absolute' }}>
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
          <button className='cursor-pointer'>
            <SendIcon width={30} height={30} />
          </button>
        </div>
      </div>
      <CommentsList />
    </div>
  );
};
