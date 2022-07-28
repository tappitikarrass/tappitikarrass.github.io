import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import axios from "axios";
import ProjectsList from "../components/ProjectsList";

type AboutMeInfo = {
  name: string;
  email: string;
  text: string;
};

function AboutMe() {
  const [info, setInfo] = useState<AboutMeInfo>();
  const theme = useTheme();

  useEffect(() => {
    axios.get("https://localhost:5001/api/aboutme").then((response) => {
      setInfo(response.data);
    });
  }, []);

  return (
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
      <CardMedia
        component="img"
        image="user.jpg"
        alt="Andrii Lytvyn"
        sx={{
          width: 200,
          borderRadius: "4px",
          marginRight: "1vw",
        }}
      />
      <Box sx={{}}>
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
              {info?.name}
            </Typography>
          }
        ></CardHeader>
        <CardContent>
          <Typography variant="body1" component="div">
            {info?.text}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default function Homepage() {
  useEffect(() => {
    document.title = "Homepage :: Andrii Lytvyn";
  }, []);

  return (
    <div>
      <Grid spacing={2} justifyContent="center" direction="column" container>
        <Grid item>
          <Typography gutterBottom variant="h5" component="div" align="center">
            About me
          </Typography>
          <AboutMe />
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Projects
          </Typography>
          <ProjectsList />
        </Grid>
      </Grid>
    </div>
  );
}
