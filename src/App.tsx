import { AppRoutes } from './routes';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';

import usePersistedState from './utils/usePersistedSate';
import GlobalStyle from './styles/global';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import { AppProvider } from './hooks';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Header toggleTheme={toggleTheme} />
          <AppRoutes />
        </AppProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
