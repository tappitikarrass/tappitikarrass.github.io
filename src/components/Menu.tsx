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
          <Grid item xs={false}>
            <Button
              href="https://github.com/tappitikarrass"
              variant="contained"
              startIcon={<GitHubIcon />}
              disableElevation
            >
              GitHub
            </Button>
          </Grid>
          <Grid item xs={true}>
            <Button
              href="mailto:lytvyn.andrii.contact@gmail.com"
              variant="contained"
              startIcon={<MailIcon />}
              disableElevation
            >
              Mail me
            </Button>
          </Grid>
          <Grid item xs={false}>
            <ModeSwitch />
          </Grid>
        </Grid>
      </Container>
      <p></p>
      <Divider />
      <p></p>
    </div>
  );
}
