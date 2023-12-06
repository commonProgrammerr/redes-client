import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";
import { Router } from "./pages";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
