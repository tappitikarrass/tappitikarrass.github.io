import React from "react";
import ModeSwitch from "./ModeSwitch";
import { Divider, Container, Grid, Button, ButtonGroup } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

export default function Menu() {
  return (
    <div>
      <p></p>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={true}>
            <ButtonGroup variant="contained" disableElevation>
              <Button startIcon={<GitHubIcon />}>GitHub</Button>
              <Button startIcon={<MailIcon />}>Contact me</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ModeSwitch />
          </Grid>
        </Grid>
      </Container>
      <p></p>
      <Divider />
    </div>
  );
}
