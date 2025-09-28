import { CommentOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import Editor from '@monaco-editor/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as monaco from 'monaco-editor';
import { useEffect, useRef } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

import { RoutePath } from '@/app/routing';
import { getLanguageId } from '@/app/utils/monaco';
import { BracketsIcon } from '@/assets/svg';
import { Author } from '@/components/Author';
import { fetchSetMark } from '../../api';
import type { IPostItemProps } from './types';

export const PostItem = ({
  id,
  username,
  userId,
  code,
  language,
  likesAmount,
  dislikesAmount,
  commentsAmount,
}: IPostItemProps) => {
  const navigate = useNavigate();
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;

    const updateHeight = () => {
      const contentHeight = editor.getContentHeight() + 5;
      if (containerRef.current) {
        containerRef.current.style.height = `${contentHeight}px`;
        editor.layout();
      }
    };

    updateHeight();
    editor.onDidContentSizeChange(updateHeight);
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: fetchSetMark,
  });

  useEffect(() => {
    return () => {
      if (editorRef.current) {
        editorRef.current.dispose();
        editorRef.current = null;
      }
    };
  }, []);

  const handleMark = (mark: 'like' | 'dislike') => {
    mutate(
      { snippetId: id, mark },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            predicate: (query) => query.queryKey[0] === 'snippets',
          });
        },
      }
    );
  };

  return (
    <div className='flex flex-col border-2 border-gray-200 rounded-lg bg-white overflow-hidden w-full'>
      <div className='flex flex-row !pl-2 !pr-2 place-content-between items-center h-7 w-full'>
        <div className='w-fit'>
          <Author id={userId} name={username} />
        </div>
        <div className='flex flex-row gap-1 items-center'>
          <BracketsIcon width={20} height={20} />
          <span>{language}</span>
        </div>
      </div>
      <div
        ref={containerRef}
        className='border-t-2 border-b-2 border-gray-200'
        style={{ width: '100%', height: '100px' }}
      >
        <Editor
          defaultLanguage={getLanguageId(language) ?? 'javascript'}
          value={code}
          height='100%'
          onMount={handleEditorDidMount}
          options={{
            automaticLayout: true,
            minimap: { enabled: false },
            scrollbar: {
              vertical: 'hidden',
              horizontal: 'hidden',
              alwaysConsumeMouseWheel: false,
            },
            scrollBeyondLastLine: false,
            padding: { top: 5, bottom: 5 },
            domReadOnly: true,
            readOnly: true,
          }}
        />
      </div>
      <div className='flex flex-row !pl-1 !pr-2 place-content-between items-center h-8 w-full'>
        <div className='flex flex-row !pl-3 gap-3 items-center'>
          <div className='flex flex-row gap-2 items-center'>
            <span className='text-xs'>{likesAmount}</span>
            <LikeFilled
              style={{ color: 'green', cursor: 'pointer' }}
              onClick={() => handleMark('like')}
            />
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <span className='text-xs'>{dislikesAmount}</span>
            <DislikeFilled
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => handleMark('dislike')}
            />
          </div>
        </div>
        <div
          className='flex flex-row gap-1 items-center'
          onClick={() => navigate(generatePath(RoutePath.POST_COMMENTS, { postId: id.toString() }))}
        >
          <span className='text-xs'>{commentsAmount}</span>
          <CommentOutlined style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};
