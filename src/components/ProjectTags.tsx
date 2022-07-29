import React from "react";
import { Grid, Chip } from "@mui/material";

type ProjectTagsProps = {
  tags: string[];
};

export default function ProjectTags({ tags }: ProjectTagsProps) {
  return (
    <Grid container direction="row" spacing={1}>
      {tags.map((value: string) => (
        <Grid key={value} item>
          <Chip key={value} label={value} />
        </Grid>
      ))}
    </Grid>
  );
}
