import React, { useState, useEffect } from "react";
import axios from "axios";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import {
  Card,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import ProjectTags from "./ProjectTags";

enum ProjectType {
  Github,
  Url,
}

type Project = {
  id: number;
  name: string;
  url: string;
  type: ProjectType;
  tags: string[];
};

export default function ProjectsList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios
      .get<Project[]>("https://localhost:5001/api/project")
      .then((response) => {
        setProjects(response.data);
      });
  }, []);

  return (
    <List>
      {projects.map((value: Project) => (
        <ListItem key={value.id}>
          <Card sx={{ width: "100%" }}>
            <ListItemButton href={value.url}>
              <ListItemIcon>
                {value.type == ProjectType.Github ? (
                  <GitHubIcon />
                ) : (
                  <PublicIcon />
                )}
              </ListItemIcon>
              <ListItemText>{value.name}</ListItemText>
              <ProjectTags tags={value.tags} />
            </ListItemButton>
          </Card>
        </ListItem>
      ))}
    </List>
  );
}
