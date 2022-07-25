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
- [ ] Simple readonly json data storage 
- [ ] Json validation
