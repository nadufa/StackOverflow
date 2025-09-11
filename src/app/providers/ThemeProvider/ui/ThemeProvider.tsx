import { ConfigProvider, type ThemeConfig } from 'antd';
import type { PropsWithChildren } from 'react';

const theme: ThemeConfig = {
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
