import React, { useState } from "react";

import {
  Accordion,
  Box,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Grid,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import emoji from "remark-emoji";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import axios from "axios";

import ProjectTags from "./ProjectTags";
import ProjectButtons from "../components/ProjectButtons";

import { Project, ProjectType } from "../Models";
import Store from "../Store.json";

export default function ProjectsList() {
  const [readmes, setReadmes] = useState<{ [key: string]: string }>({});

  return (
    <Grid justifyContent="center" spacing={2} container>
      {Store.project.map((value: Project) => (
        <Grid
          item
          key={value.id}
          sx={{
            // width: "100%",
            width: "inherit",
            display: "block",
            maxWidth: {
              xs: "97vw",
              sm: "79vw",
              lg: "80vw",
            },
          }}
        >
          <Paper elevation={0} variant="outlined">
            <Accordion
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
                    p: "1.5em",
                    paddingTop: "1em",
                  }}
                >
                  {/* project buttons */}
                  <ProjectButtons project={value} />
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm, emoji]}
                    rehypePlugins={[rehypeSlug, rehypeRaw]}
                  >
                    {readmes[value.repoName]}
                  </ReactMarkdown>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
