import { AppRouterProvider, QueryProvider, ThemeProvider } from './providers';

function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <AppRouterProvider />
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;
