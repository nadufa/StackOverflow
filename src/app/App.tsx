import { App as AntdApp } from 'antd';
import { AppRouterProvider, NotificationProvider, QueryProvider, ThemeProvider } from './providers';

function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <AntdApp>
          <NotificationProvider>
            <AppRouterProvider />
          </NotificationProvider>
        </AntdApp>
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;
