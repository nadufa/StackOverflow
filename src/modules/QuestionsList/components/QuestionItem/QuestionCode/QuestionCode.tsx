interface IQuestionCode {
  attachedCode: string;
}

export const QuestionCode = ({ attachedCode }: IQuestionCode) => {
  return (
    <figure>
      <figcaption className='text-xs font-semibold text-gray-500 !mb-1'>Attached code:</figcaption>
      <pre className='!p-2 bg-gray-50 rounded-lg border border-gray-200 text-sm font-mono overflow-x-auto whitespace-pre-wrap'>
        <code>{attachedCode}</code>
      </pre>
    </figure>
  );
};
