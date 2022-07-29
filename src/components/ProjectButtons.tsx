import React from "react";
import { Grid, Chip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Project } from "../Models";

type ProjectButtonsProps = {
  project: Project;
};

export default function ProjectButtons({ project }: ProjectButtonsProps) {
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      sx={{ paddingBottom: "1em", flexWrap: "true" }}
    >
      <Grid item>
        <Chip
          icon={<GitHubIcon />}
          label="View on GitHub"
          color="primary"
          variant="filled"
          onClick={() =>
            window.open(project.url, "_blank", "noopener,noreferrer")
          }
        />
      </Grid>
    </Grid>
  );
}
