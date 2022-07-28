import React from "react";
import { Paper, Typography } from "@mui/material";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        // flexShrink: 0,
        textAlign: "center",
        backgroundColor: "tomato",
        color: "white",
      }}
    >
      <Paper square>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ paddingTop: "2.5vh", minHeight: "7vh" }}
        >
          Copyright (C) {year} Andrii Lytvyn
        </Typography>
      </Paper>
    </footer>
  );
}
