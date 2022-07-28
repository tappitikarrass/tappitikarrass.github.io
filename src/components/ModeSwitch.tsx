import React, { useEffect, useState } from "react";
import { IconButton, useTheme } from "@mui/material";
import { ColorModeContext } from "./Layout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ModeSwitch() {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();

  const [cssPath, setCssPath] = useState<string>(
    theme.palette.mode === "dark"
      ? "github-markdown-dark.css"
      : "github-markdown-light.css"
  );

  useEffect(() => {
    const head = document.head;
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = cssPath;

    head.appendChild(link);

    return () => {
      head.removeChild(link);
    };
  }, [cssPath]);

  return (
    <IconButton
      onClick={() => {
        colorMode.toggleColorMode();
        if (theme.palette.mode === "dark") {
          setCssPath("github-markdown-light.css");
        } else {
          setCssPath("github-markdown-dark.css");
        }
      }}
    >
      {theme.palette.mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
