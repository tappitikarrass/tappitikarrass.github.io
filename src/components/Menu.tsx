import React from "react";
import { Divider, Container, Grid, Button, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MailIcon from "@mui/icons-material/Mail";
import useSound from "use-sound";
import ModeSwitch from "./ModeSwitch";
import tutturuuu from "../audio/tutturuuu.mp3";

export default function Menu() {
  const [play, { stop }] = useSound(tutturuuu);

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
            <IconButton
              onClick={() => {
                play();
              }}
            >
              <EmojiEmotionsIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
      <p></p>
      <Divider />
      <p></p>
    </div>
  );
}
