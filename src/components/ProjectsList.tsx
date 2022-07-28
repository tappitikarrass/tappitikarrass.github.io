import React, { useState, useEffect } from "react";
import axios from "axios";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import ReactMarkdown from "react-markdown";
import { useTheme } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import {
  // Accordion,
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
import "github-markdown-css";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={1} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:first-child": {
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
  },
  "&:last-child": {
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
  },
  "&:before": {
    display: "none",
  },
}));

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
    <div>
      {projects.map((value: Project) => (
        <Accordion
          key={value.id}
          sx={{
            width: "inherit",
            // borderLeft: `1px solid ${theme.palette.divider}`,
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
          TransitionProps={{ unmountOnExit: true }}
          disableGutters
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Grid alignItems="center" container>
              <Grid item xs={true}>
                <Stack direction="row">
                  {value.type == ProjectType.Github ? (
                    <GitHubIcon sx={{ marginRight: 3 }} />
                  ) : (
                    <PublicIcon sx={{ marginRight: 3 }} />
                  )}
                  <Typography>{value.repoName}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={false} sx={{ marginRight: 2 }}>
                <Stack direction="row" spacing={1}>
                  <ProjectTags tags={value.tags} />
                </Stack>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails className="markdown-body" sx={{ padding: "1vw" }}>
            <Chip
              icon={<GitHubIcon />}
              label="View"
              color="primary"
              variant="filled"
              onClick={() =>
                window.open(value.url, "_blank", "noopener,noreferrer")
              }
            />
            <div style={{}}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug, rehypeRaw]}
              >
                {readmes[value.repoName]}
              </ReactMarkdown>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
