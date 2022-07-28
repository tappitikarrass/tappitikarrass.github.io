import React from "react";
import {
  Divider,
  Paper,
  Container,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MailIcon from "@mui/icons-material/Mail";
import useSound from "use-sound";
import ModeSwitch from "./ModeSwitch";
import tutturuuu from "../audio/tutturuuu.mp3";

export default function Menu() {
  const [play] = useSound(tutturuuu);

  // TODO: Remove improperly used p tags
  return (
    <div>
      <p></p>
      <Paper elevation={1}>
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
                Email
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
      </Paper>
      <p></p>
    </div>
  );
}
