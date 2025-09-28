import { PostsList } from '@/modules/PostsList';
import { useOutletContext } from 'react-router-dom';

type ProtectedContext = {
  authUserId: string;
  authUserUsername: string;
};

export const MyPosts = () => {
  const { authUserId } = useOutletContext<ProtectedContext>();
  return <PostsList userId={authUserId} />;
};
