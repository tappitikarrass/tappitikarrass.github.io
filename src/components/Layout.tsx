import React, { useEffect } from "react";
import { ReactNode } from "react";
import {
  useMediaQuery,
  createTheme,
  ThemeProvider,
  Paper,
  Grid,
  Container,
  CssBaseline,
} from "@mui/material";
import Menu from "./Menu";
import "../css/Layout.css";

interface Props {
  children?: ReactNode;
}

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {
    console.log("never executed");
  },
});

export default function Layout({ children }: Props) {
  // select default mode
  // on first run it will set it to system theme
  // then it will use value stored in localStorage
  let defaultMode = "dark";
  {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const data = window.localStorage.getItem("mode");
    if (data !== null) {
      defaultMode = data === "dark" ? "dark" : "light";
    } else {
      defaultMode = prefersDarkMode ? "dark" : "light";
    }
  }

  const [mode, setMode] = React.useState<"light" | "dark">(
    defaultMode === "dark" ? "dark" : "light"
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  useEffect(() => {
    window.localStorage.setItem("mode", mode);
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper elevation={1} sx={{ bgcolor: "black" }}>
          <Grid justifyContent="center" spacing={4} container>
            <Grid item sm={12} md={10} lg={8}>
              <Paper className="content" variant="outlined" square>
                <Menu />
                <Container maxWidth="xl">{children}</Container>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
