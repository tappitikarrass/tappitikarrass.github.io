import React from "react";

import { Paper, Typography, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  const year = new Date().getFullYear();

  return (
    <footer>
      <Paper
        sx={{
          py: "1.5em",
          marginTop: "auto",
          textAlign: "center",
          borderTop: `1px solid ${theme.palette.divider}`,
          bgcolor: `${theme.palette.background}`,
        }}
        square
      >
        <Typography color="text.secondary" variant="subtitle2" component="div">
          Copyright (C) {year} Andrii Lytvyn
        </Typography>
      </Paper>
    </footer>
  );
}
