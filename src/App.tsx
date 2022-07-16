import { AppRoutes } from "./routes";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";

import usePersistedState from "./utils/usePersistedSate";
import GlobalStyle from "./styles/global";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

import { AuthProvider} from "./context/AuthContext";


function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />
        <AppRoutes />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
