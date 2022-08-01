import React from "react";

import { Grid, Typography } from "@mui/material";

import ProjectsList from "../components/ProjectsList";
import AboutMe from "../components/AboutMe";
import Technologies from "../components/Technologies";

export default function Homepage() {
  return (
    <Grid spacing={4} justifyContent="center" direction="column" container>
      <Grid item>
        <Typography gutterBottom variant="h5" component="div" align="center">
          About me
        </Typography>
        <AboutMe />
      </Grid>
      {/* <Test /> */}
      <Grid item>
        <Typography gutterBottom variant="h5" component="div" align="center">
          Technologies & Tools
        </Typography>
        <Technologies />
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="h5" component="div" align="center">
          Projects
        </Typography>
        <ProjectsList />
      </Grid>
    </Grid>
  );
}
