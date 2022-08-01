import React, { useState } from "react";

import {
  Typography,
  Paper,
  Container,
  Grid,
  IconButton,
  useTheme,
  Backdrop,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";

import useSound from "use-sound";

import ModeSwitch from "./ModeSwitch";

import tutturuuu from "../assets/audio/tutturuuu.mp3";

export default function Menu() {
  const theme = useTheme();
  const [play] = useSound(tutturuuu);
  const [cvMsgOpen, setCvMsgOpen] = useState<boolean>(false);

  return (
    <header>
      <Paper
        square
        sx={{
          py: "1em",
          borderBottom: `1px solid ${theme.palette.divider}`,
          bgcolor: `${theme.palette.background}`,
          boxShadow: 0,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={true}>
              <IconButton
                href="https://github.com/tappitikarrass"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href="mailto:lytvyn.andrii.contact@gmail.com"
                aria-label="Email"
              >
                <MailIcon />
              </IconButton>
              <IconButton
                aria-label="CV"
                onClick={() => {
                  setCvMsgOpen(!cvMsgOpen);
                }}
              >
                <Backdrop
                  open={cvMsgOpen}
                  onClick={() => setCvMsgOpen(false)}
                  sx={{
                    zIndex: 1000,
                  }}
                >
                  <Paper
                    sx={{
                      maxWidth: {
                        xs: "80vw",
                        sm: "60vw",
                        md: "40vw",
                      },
                      p: "1em",
                      textAlign: "left",
                    }}
                  >
                    <Typography>
                      {`
                      This button should show my CV but I haven't found a great
                      way to generate and show it yet.
                      `}
                    </Typography>
                    <Typography>
                      {`
                      I'll add this feature as soon as
                      possible 🌈.
                      `}
                    </Typography>
                  </Paper>
                </Backdrop>
                <AccountCircleIcon />
              </IconButton>
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
