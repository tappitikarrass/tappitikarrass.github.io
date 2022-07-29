import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import ProjectsList from "../components/ProjectsList";
import AboutMe from "../components/AboutMe";
// import Test from "../components/Test";

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
        {/* <Test /> */}
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
