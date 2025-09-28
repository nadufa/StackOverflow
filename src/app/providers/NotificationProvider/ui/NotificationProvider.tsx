import { App } from 'antd';
import { createContext, type ReactNode, useContext } from 'react';

interface NotificationContextType {
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const { notification } = App.useApp();

  const success = (message: string) => {
    notification.success({
      message,
      duration: 3,
      placement: 'topRight',
    });
  };

  const error = (message: string) => {
    notification.error({
      message,
      duration: 5,
      placement: 'topRight',
    });
  };

  const info = (message: string) => {
    notification.info({
      message,
      duration: 4,
      placement: 'topRight',
    });
  };

  const value: NotificationContextType = {
    success,
    error,
    info,
  };

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
