# FROM mcr.microsoft.com/dotnet/aspnet:6.0
FROM mcr.microsoft.com/dotnet/sdk:6.0

ENV DOTNET_USE_POLLING_FILE_WATCHER 1

WORKDIR /source/app
COPY backend/. /source/app

RUN ["dotnet", "dev-certs", "https"]
ENTRYPOINT ["dotnet", "watch", "run"]
