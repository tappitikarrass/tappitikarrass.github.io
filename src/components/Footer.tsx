import React from "react";
import { Paper, Typography, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        textAlign: "center",
        marginTop: "auto",
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Paper square>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          component="div"
          sx={{
            py: "1.5em",
          }}
        >
          Copyright (C) {year} Andrii Lytvyn
        </Typography>
      </Paper>
    </footer>
  );
}
