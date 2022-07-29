export enum ProjectType {
  Github,
  Url,
}

export type Project = {
  id: number;
  repoName: string;
  userName: string;
  url: string;
  type: ProjectType;
  tags: string[];
};
