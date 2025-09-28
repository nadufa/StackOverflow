import { RootLayout } from '@/app/layouts';
import { RoutePath } from '@/app/routing';
import { Spin } from 'antd';
import { Suspense } from 'react';
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
  Logout,
  MyPosts,
  PostComments,
  Questions,
  Register,
  Users,
} from './lazyComponents';
import { ProtectedRoute } from './ProtectedRoute';

const Loading = () => (
  <div className='flex justify-center items-center h-64'>
    <Spin size='large' />
  </div>
);

export const createLazyElement = (Component: React.ComponentType) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    errorElement: createLazyElement(Error),
    element: <RootLayout />,
    children: [
      { path: RoutePath.BASE, element: createLazyElement(Home) },
      { path: RoutePath.LOGIN, element: createLazyElement(Login) },
      { path: RoutePath.LOGOUT, element: createLazyElement(Logout) },
      { path: RoutePath.REGISTER, element: createLazyElement(Register) },
      { path: RoutePath.NOT_FOUND, element: createLazyElement(Error) },
      {
        element: <ProtectedRoute />,
        children: [
          {
            children: [
              { path: RoutePath.ACCOUNT, element: createLazyElement(Account) },
              { path: RoutePath.CREATE_POST, element: createLazyElement(CreatePost) },
              { path: RoutePath.CREATE_QUESTION, element: createLazyElement(CreateQuestion) },
              { path: RoutePath.EDIT_POST, element: createLazyElement(EditPost) },
              { path: RoutePath.EDIT_QUESTION, element: createLazyElement(EditQuestion) },
              { path: RoutePath.MY_POSTS, element: createLazyElement(MyPosts) },
              { path: RoutePath.POST_COMMENTS, element: createLazyElement(PostComments) },
              { path: RoutePath.QUESTIONS_LIST, element: createLazyElement(Questions) },
              { path: RoutePath.USER, element: createLazyElement(Account) },
              { path: RoutePath.USERS_LIST, element: createLazyElement(Users) },
            ],
          },
        ],
      },
    ],
  },
]);
