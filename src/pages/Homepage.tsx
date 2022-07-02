import React from "react";
import {
  Grid,
  Card,
  Divider,
  CardMedia,
  CardContent,
  Link,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import dotnetSvg from "../imgs/dotnet.svg";
import redisSvg from "../imgs/redis.svg";
import csharpSvg from "../imgs/csharp.svg";
import postgresSvg from "../imgs/postgres.svg";
import GitHubIcon from "@mui/icons-material/GitHub";

export function ProjectsList() {
  return (
    <List disablePadding>
      <ListItem disableGutters>
        <ListItemButton>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <Link href="https://github.com/tappitikarrass/telegram-queue-bot">
            telegram-queue-bot
          </Link>
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default function Homepage() {
  return (
    <div>
      <Typography gutterBottom variant="h5" component="div" align="center">
        Technologies
      </Typography>
      <Grid spacing={2} justifyContent="center" direction="column" container>
        <Grid item>
          <Card
            sx={{
              p: "0.5em",
              display: "flex",
              flexDirection: "column",
              alignItems: "top",
            }}
          >
            <CardContent sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                src={dotnetSvg}
                title=".NET"
                sx={{ width: 100, height: 100, mr: 3 }}
              />
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Typography gutterBottom variant="h6" component="div">
                  .NET & C#
                </Typography>
                <Typography variant="body2" component="div">
                  I started to learn .NET and C# in April of 2022.
                </Typography>
              </CardContent>
            </CardContent>
            <CardContent>
              <ProjectsList />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
