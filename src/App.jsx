import { createTheme, ThemeProvider } from "@mui/material";
import { red } from "@mui/material/colors";
import ModuleA from "./ModuleA";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: red[100],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModuleA />
    </ThemeProvider>
  );
}

export default App;
