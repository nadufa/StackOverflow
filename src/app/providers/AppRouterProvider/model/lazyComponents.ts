import { lazy } from 'react';

const lazyNamed = (importFn: () => Promise<any>, exportName: string = 'default') =>
  lazy(() => importFn().then((module) => ({ default: module[exportName] })));

export const Home = lazyNamed(() => import('@/pages/Home'), 'Home');
export const Login = lazyNamed(() => import('@/pages/Login'), 'Login');
export const Logout = lazyNamed(() => import('@/pages/Logout'), 'Logout');
export const Register = lazyNamed(() => import('@/pages/Register'), 'Register');
export const Error = lazyNamed(() => import('@/pages/Error'), 'Error');
export const Account = lazyNamed(() => import('@/pages/Account'), 'Account');
export const CreatePost = lazyNamed(() => import('@/pages/CreatePost'), 'CreatePost');
export const CreateQuestion = lazyNamed(() => import('@/pages/CreateQuestion'), 'CreateQuestion');
export const EditPost = lazyNamed(() => import('@/pages/EditPost'), 'EditPost');
export const EditQuestion = lazyNamed(() => import('@/pages/EditQuestion'), 'EditQuestion');
export const MyPosts = lazyNamed(() => import('@/pages/MyPosts'), 'MyPosts');
export const PostComments = lazyNamed(() => import('@/pages/PostComments'), 'PostComments');
export const Questions = lazyNamed(() => import('@/pages/Questions'), 'Questions');
export const Users = lazyNamed(() => import('@/pages/Users'), 'Users');
