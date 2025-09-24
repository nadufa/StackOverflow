import { useOutletContext } from 'react-router-dom';
import { PostsList } from '../../modules/PostsList';

type ProtectedContext = {
  authUserId: string;
  authUserUsername: string;
};

export const MyPosts = () => {
  const { authUserId } = useOutletContext<ProtectedContext>();
  return (
    <>
      <PostsList userId={authUserId} />
    </>
  );
};
