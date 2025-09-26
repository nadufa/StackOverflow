import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { useRef } from 'react';

interface IQuestionCode {
  attachedCode: string;
}

export const QuestionCode = ({ attachedCode }: IQuestionCode) => {
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

  return (
    // <figure>
    //   <figcaption className='text-xs font-semibold text-gray-500 !mb-1'>Attached code:</figcaption>
    //   <pre className='!p-2 bg-gray-50 rounded-lg border border-gray-200 text-sm font-mono overflow-x-auto whitespace-pre-wrap'>
    //     <code>{attachedCode}</code>
    //   </pre>
    // </figure>
    <div
      ref={containerRef}
      className='border-t-2 border-b-2 border-gray-200 !pt-1 !pb-1'
      style={{ width: '100%', height: '100px' }}
    >
      <Editor
        defaultLanguage={'javascript'}
        value={attachedCode}
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
  );
};
