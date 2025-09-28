import { ConfigProvider, type ThemeConfig } from 'antd';
import type { PropsWithChildren } from 'react';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#1974d2',
  },
  components: {
    Menu: {
      darkItemBg: 'transparent',
      itemBg: 'transparent',
      popupBg: 'transparent',
      itemColor: '#ffffff',
      itemHoverColor: '#ffffff',
      itemSelectedColor: '#ffffff',
      itemHoverBg: '#ffffff15',
      itemSelectedBg: '#ffffff3a',
    },
  },
};

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};
