import React from "react";
import { Stack, Chip } from "@mui/material";

type ProjectTagsProps = {
  tags: string[];
};

export default function ProjectTags({ tags }: ProjectTagsProps) {
  return (
    <Stack direction="row" spacing={1}>
      {tags.map((value: string) => (
        <Chip key={value} label={value} />
      ))}
    </Stack>
  );
}
