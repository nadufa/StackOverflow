import { createBrowserRouter } from 'react-router-dom';
import {
  Account,
  CreatePost,
  CreateQuestion,
  EditPost,
  EditQuestion,
  Error,
  Home,
  Login,
  MyPosts,
  Post,
  QuestionsList,
  User,
  UsersList,
} from '../../../../pages';
import { RootLayout } from '../../../layouts';
import { RoutePath } from '../../../routing';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    errorElement: <Error />,
    children: [
      {
        element: <RootLayout />,
        children: [{ path: RoutePath.BASE, element: <Home /> }],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <RootLayout />,
            children: [
              { path: RoutePath.ACCOUNT, element: <Account /> },
              { path: RoutePath.CREATE_POST, element: <CreatePost /> },
              { path: RoutePath.CREATE_QUESTION, element: <CreateQuestion /> },
              { path: RoutePath.EDIT_POST, element: <EditPost /> },
              { path: RoutePath.EDIT_QUESTION, element: <EditQuestion /> },
              { path: RoutePath.MY_POSTS, element: <MyPosts /> },
              { path: RoutePath.POST, element: <Post /> },
              { path: RoutePath.QUESTIONS_LIST, element: <QuestionsList /> },
              { path: RoutePath.USER, element: <User /> },
              { path: RoutePath.USERS_LIST, element: <UsersList /> },
            ],
          },
        ],
      },
      { path: RoutePath.LOGIN, element: <Login /> },
      { path: RoutePath.NOT_FOUND, element: <Error /> },
    ],
  },
]);
