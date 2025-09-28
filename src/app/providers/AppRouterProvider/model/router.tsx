import { RootLayout } from '@/app/layouts';
import { RoutePath } from '@/app/routing';
import {
  Account,
  CreatePost,
  CreateQuestion,
  EditPost,
  EditQuestion,
  Error,
  Home,
  Login,
  Logout,
  MyPosts,
  PostComments,
  Questions,
  Register,
  Users,
} from '@/pages';
import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      { path: RoutePath.BASE, element: <Home /> },
      { path: RoutePath.LOGIN, element: <Login /> },
      { path: RoutePath.LOGOUT, element: <Logout /> },
      { path: RoutePath.REGISTER, element: <Register /> },
      { path: RoutePath.NOT_FOUND, element: <Error /> },
      {
        element: <ProtectedRoute />,
        children: [
          {
            children: [
              { path: RoutePath.ACCOUNT, element: <Account /> },
              { path: RoutePath.CREATE_POST, element: <CreatePost /> },
              { path: RoutePath.CREATE_QUESTION, element: <CreateQuestion /> },
              { path: RoutePath.EDIT_POST, element: <EditPost /> },
              { path: RoutePath.EDIT_QUESTION, element: <EditQuestion /> },
              { path: RoutePath.MY_POSTS, element: <MyPosts /> },
              { path: RoutePath.POST_COMMENTS, element: <PostComments /> },
              { path: RoutePath.QUESTIONS_LIST, element: <Questions /> },
              { path: RoutePath.USER, element: <Account /> },
              { path: RoutePath.USERS_LIST, element: <Users /> },
            ],
          },
        ],
      },
    ],
  },
]);
