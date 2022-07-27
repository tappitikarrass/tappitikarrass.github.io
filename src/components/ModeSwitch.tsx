import React from "react";
import { IconButton, useTheme } from "@mui/material";
import { ColorModeContext } from "./Layout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ModeSwitch() {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <IconButton onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
