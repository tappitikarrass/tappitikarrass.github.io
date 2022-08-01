import React from "react";

import {
  Paper,
  Grid,
  Card,
  CardMedia,
  CardHeader,
  useTheme,
} from "@mui/material";

import redis from "../assets/imgs/redis.png";
import csharp from "../assets/imgs/csharp.svg";
import dotnet from "../assets/imgs/dotnet.svg";
import postgres from "../assets/imgs/postgres.png";
import typescript from "../assets/imgs/typescript.svg";
import docker from "../assets/imgs/docker.png";
import git from "../assets/imgs/git.svg";
import react from "../assets/imgs/react.png";
import Store from "../Store.json";

export default function Technologies() {
  const theme = useTheme();

  function getImage(name: string): string {
    switch (name) {
      case "redis":
        return redis;
      case "postgres":
        return postgres;
      case "dotnet":
        return dotnet;
      case "csharp":
        return csharp;
      case "typescript":
        return typescript;
      case "docker":
        return docker;
      case "git":
        return git;
      case "react":
        return react;
      default:
        return redis;
    }
  }

  return (
    <>
      <Grid
        spacing={1}
        container
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
        }}
      >
        {Store.technologies.map((value) => (
          <Grid key={value.id} item>
            <Paper
              variant="outlined"
              sx={{
                ":hover": {
                  border: `1px solid ${
                    theme.palette.mode === "dark"
                      ? theme.palette.text.primary
                      : theme.palette.divider
                  }`,
                  boxShadow: 8,
                },
              }}
            >
              <Card
                sx={{
                  textAlign: { sm: "left", md: "center" },
                  display: "flex",
                  flexDirection: { sm: "row", md: "column" },
                }}
              >
                <CardMedia
                  component="img"
                  image={getImage(value.img)}
                  sx={{
                    width: { xs: "2em", md: "3em" },
                    height: { xs: "2em", md: "3em" },
                    m: { xs: "0.7em", md: "2em" },
                    mb: { xs: "0.6em", md: "1em" },
                  }}
                />
                <CardHeader subheader={value.name} />
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
