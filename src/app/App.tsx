import { AppRouterProvider, ThemeProvider } from './providers';

function App() {
  return (
    <ThemeProvider>
      <AppRouterProvider />
    </ThemeProvider>
  );
}

export default App;
