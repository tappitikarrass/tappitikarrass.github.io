import React from "react";
import {
  Paper,
  Container,
  Grid,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MailIcon from "@mui/icons-material/Mail";
import useSound from "use-sound";
import ModeSwitch from "./ModeSwitch";
import tutturuuu from "../assets/audio/tutturuuu.mp3";

export default function Menu() {
  const [play] = useSound(tutturuuu);
  const theme = useTheme();

  return (
    <header>
      <Paper
        elevation={0}
        square
        sx={{
          py: "1em",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
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
      </Paper>
    </header>
  );
}
