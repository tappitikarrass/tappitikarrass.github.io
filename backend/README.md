# ASP.NET Core 6 Backend

## Requirements
- `docker`, `docker-compose`
- `dotnet-sdk-6`
- `make`

## Make targets (repo root)
| `make` target | Description                                                  |
|---------------|--------------------------------------------------------------|
| `compose`     | prepare production environment                               |
| `cleanup`     | delete all images and containers created by `docker-compose` |

> Makefile inside this directory has only one target. It's `watch` that run `dotnet watch` locally with necessary environment variables.

## Current objectives
- [x] Simple readonly json data storage 
- [ ] Improve a way in which user obtains json store object
- [ ] Json validation
