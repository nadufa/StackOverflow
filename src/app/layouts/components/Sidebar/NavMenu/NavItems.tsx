import {
  EditOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
  SnippetsOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { RoutePath } from '../../../../routing';

export const NavItems: MenuProps['items'] = [
  {
    key: RoutePath.BASE,
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: RoutePath.ACCOUNT,
    icon: <UserOutlined />,
    label: 'My account',
  },
  {
    key: RoutePath.CREATE_POST,
    icon: <EditOutlined />,
    label: 'Post snippet',
  },
  {
    key: RoutePath.MY_POSTS,
    icon: <SnippetsOutlined />,
    label: 'My snippets',
  },
  {
    key: RoutePath.QUESTIONS_LIST,
    icon: <QuestionCircleOutlined />,
    label: 'Questions',
  },
  {
    key: RoutePath.USERS_LIST,
    icon: <UsergroupAddOutlined />,
    label: 'Users',
  },
];
