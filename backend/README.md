# ASP.NET Core 6 Backend

## Requirements
- `docker`, `docker-compose`
- `dotnet-sdk-6`
- `make`

## Usage
| `make` target        | Description                                                        |
|----------------------|--------------------------------------------------------------------|
| `compose-production` | prepare production environment                                     |
| `compose-dev`        | prepare development environment with hot reload                    |
| `compose-cleanup`    | delete all built images and created containers by `docker-compose` |

## Issues
| No | Description/Solution                                                                                                                                                                              |
|----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1  | `dotnet watch` should run `dotnet restore` in order to work but that breaks locally installed dependencies. So, for example, `onmisharp` langserver running with `neovim` isn't working properly. |
|    | To solve this problem run `dotnet restore` locally after `compose-dev` runs `dotnet watch` and restores dependencies.                                                                             |
