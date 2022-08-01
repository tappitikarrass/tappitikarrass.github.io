import React, {
  useMemo,
  useEffect,
  useState,
  createContext,
  ReactNode,
} from "react";

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
import Footer from "./Footer";

interface Props {
  children?: ReactNode;
}

export const ColorModeContext = createContext({
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

  const [mode, setMode] = useState<"light" | "dark">(
    defaultMode === "dark" ? "dark" : "light"
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const [cssPath, setCssPath] = useState<string>(
    defaultMode === "dark"
      ? "github-markdown-dark.css"
      : "github-markdown-light.css"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        if (theme.palette.mode === "dark") {
          setCssPath("github-markdown-light.css");
        } else {
          setCssPath("github-markdown-dark.css");
        }
      },
    }),
    []
  );

  useEffect(() => {
    window.localStorage.setItem("mode", mode);
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper elevation={0}>
          <Grid justifyContent="center" spacing={4} container>
            <Grid item xs={12} sm={10} md={10} lg={8} xl={8}>
              <Paper
                variant="outlined"
                square
                sx={{
                  minHeight: "100vh",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Menu />
                <main>
                  <Container
                    maxWidth="xl"
                    sx={{
                      my: "1.5em",
                    }}
                  >
                    {children}
                  </Container>
                </main>
                <Footer />
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
