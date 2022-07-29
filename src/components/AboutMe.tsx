import React from "react";
import {
  useTheme,
  Paper,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
import Store from "../Store.json";

export type AboutMeInfo = {
  name: string;
  email: string;
  text: string;
};

export default function AboutMe() {
  const theme = useTheme();

  return (
    <Paper elevation={0}>
      <Card
        sx={{
          width: "100%",
          border: `1px solid ${theme.palette.divider}`,
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
          alignItems: { xs: "center" },
          justifyContent: { xs: "center" },
          paddingTop: { xs: 10, sm: 10, md: 0, lg: 0, xl: 0 },
        }}
      >
        <Paper
          sx={{
            boxShadow: { xs: 3, sm: 3, md: 1, lg: 1, xl: 1 },
          }}
        >
          <CardMedia
            component="img"
            image="user.jpg"
            alt="Andrii Lytvyn"
            sx={{
              width: 200,
              height: 200,
              borderRadius: "4px",
              borderTopRightRadius: { md: 0, lg: 0, xl: 0 },
              borderBottomRightRadius: { md: 0, lg: 0, xl: 0 },
            }}
          />
        </Paper>
        <Box
          sx={{
            marginLeft: { xs: 0, sm: 0, md: "1em", lg: "1em", xl: "1em" },
          }}
        >
          <CardHeader
            title={
              <Typography
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                    xl: "left",
                  },
                }}
                variant="h6"
              >
                {Store.aboutMe?.name}
              </Typography>
            }
          ></CardHeader>
          <CardContent>
            <Typography variant="body1">{Store.aboutMe?.text}</Typography>
          </CardContent>
        </Box>
      </Card>
    </Paper>
  );
}
