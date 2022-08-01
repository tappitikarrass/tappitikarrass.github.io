import React from "react";

import { Box } from "@mui/material";

export default function test() {
  return (
    <Box
      sx={{
        textAlign: "center",
        fontSize: "24pt",
        m: "1em",
      }}
    >
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        xs
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        sm
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "none",
            xl: "none",
          },
        }}
      >
        md
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "none",
          },
        }}
      >
        lg
      </Box>

      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "block",
          },
        }}
      >
        xl
      </Box>
    </Box>
  );
}
