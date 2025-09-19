import { CommentOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import Editor from '@monaco-editor/react';
import type * as monaco from 'monaco-editor';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../app/routing';
import { BracketsIcon, PersonIcon } from '../../../assets/svg';

export const PostItem = () => {
  const navigate = useNavigate();
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [height, setHeight] = useState(100);

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    updateHeight(editor);

    editor.onDidContentSizeChange(() => {
      updateHeight(editor);
    });
  };

  const updateHeight = (editor: monaco.editor.IStandaloneCodeEditor) => {
    const contentHeight = editor.getContentHeight() + 5;
    setHeight(contentHeight);
  };

  const value = `console.log('Hello, world!');
console.log('Hello, world!');`;

  return (
    <div className='flex flex-col border-2 border-gray-200 rounded-lg bg-white overflow-hidden w-full'>
      <div className='flex flex-row !pl-2 !pr-2 place-content-between items-center h-7 w-full'>
        <div className='flex flex-row gap-1 items-center cursor-pointer'>
          <PersonIcon width={20} height={20} />
          <span>Dearest Nadufa</span>
        </div>
        <div className='flex flex-row gap-1 items-center'>
          <BracketsIcon width={20} height={20} />
          <span>Javascript</span>
        </div>
      </div>
      <Editor
        className='border-t-2 border-b-2 border-gray-200'
        defaultLanguage='javascript'
        value={value}
        height={height}
        onMount={handleEditorDidMount}
        options={{
          automaticLayout: true,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          padding: {
            top: 5,
            bottom: 5,
          },
          domReadOnly: true,
          readOnly: true,
        }}
      />
      <div className='flex flex-row !pl-1 !pr-2 place-content-between items-center h-8 w-full'>
        <div className='flex flex-row !pl-3 gap-3 items-center'>
          <div className='flex flex-row gap-2 items-center'>
            <span className='text-xs'>1</span>
            <LikeFilled style={{ color: 'green', cursor: 'pointer' }} />
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <span className='text-xs'>1</span>
            <DislikeFilled style={{ color: 'red', cursor: 'pointer' }} />
          </div>
        </div>
        <div
          className='flex flex-row gap-1 items-center'
          onClick={() => navigate(RoutePath.POST_COMMENTS)}
        >
          <span className='text-xs'>1</span>
          <CommentOutlined style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};
