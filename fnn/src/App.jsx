import "./App.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import HomePage from "./scenes/homePage/homePage";

function App() {
  const theme = createTheme(themeSettings());
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
