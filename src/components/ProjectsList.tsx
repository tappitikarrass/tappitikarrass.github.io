import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import ReactMarkdown from "react-markdown";
import {
  Accordion,
  Box,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Chip,
  Grid,
} from "@mui/material";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import ProjectTags from "./ProjectTags";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

enum ProjectType {
  Github,
  Url,
}

type Project = {
  id: number;
  repoName: string;
  userName: string;
  url: string;
  type: ProjectType;
  tags: string[];
};

export default function ProjectsList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [readmes, setReadmes] = useState<{ [key: string]: string }>({});
  const theme = useTheme();

  useEffect(() => {
    axios
      .get<Project[]>("https://localhost:5001/api/project")
      .then((response) => {
        setProjects(response.data);
      });
  }, []);

  return (
    <Grid justifyContent="center" spacing={2} container>
      {projects.map((value: Project) => (
        <Grid
          item
          key={value.id}
          sx={{
            width: "100%",
            maxWidth: {
              xs: "93vw",
              sm: "77vw",
              md: "77vw",
              lg: "80vw",
              xl: "80vw",
            },
          }}
        >
          <Accordion
            sx={{
              border: `1px solid ${theme.palette.divider}`,
            }}
            onChange={() => {
              if (readmes[value.repoName] === undefined) {
                axios
                  .get(
                    `https://raw.githubusercontent.com/tappitikarrass/${value.repoName}/main/README.md`
                  )
                  .then((response) => {
                    const newValue: { [key: string]: string } = {
                      [`${value.repoName}`]: response.data,
                    };

                    setReadmes((readmes) => ({
                      ...readmes,
                      ...newValue,
                    }));
                  });
              }
            }}
            TransitionProps={{ unmountOnExit: false }}
            disableGutters
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Grid
                alignItems="center"
                container
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                  flexWrap: "nowrap",
                  justifyContent: "right",
                  alignItems: {
                    xs: "right",
                    sm: "right",
                    md: "center",
                    lg: "center",
                    xl: "center",
                  },
                }}
              >
                {/* icon */}
                <Grid item xs={true}>
                  <Stack direction="row">
                    {value.type == ProjectType.Github ? (
                      <GitHubIcon sx={{ marginRight: "1em" }} />
                    ) : (
                      <PublicIcon sx={{ marginRight: "1em" }} />
                    )}
                    <Typography sx={{ marginRight: "2em" }}>
                      {value.repoName}
                    </Typography>
                  </Stack>
                </Grid>
                {/* tags */}
                <Grid
                  item
                  xs={false}
                  sx={{
                    marginRight: 2,
                    marginTop: { xs: "1em", sm: "1em", md: 0, lg: 0, lx: 0 },
                  }}
                >
                  <ProjectTags tags={value.tags} />
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: 0,
              }}
            >
              <Box
                className="markdown-body"
                sx={{
                  p: "2em",
                  paddingTop: "1.5em",
                }}
              >
                {/* project buttons */}
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
                        window.open(value.url, "_blank", "noopener,noreferrer")
                      }
                    />
                  </Grid>
                </Grid>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeSlug, rehypeRaw]}
                >
                  {readmes[value.repoName]}
                </ReactMarkdown>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Grid>
      ))}
    </Grid>
  );
}
