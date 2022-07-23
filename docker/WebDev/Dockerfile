FROM mcr.microsoft.com/dotnet/sdk:6.0

WORKDIR /source/app
COPY backend/. /source/app

RUN ["dotnet", "dev-certs", "https"]

ENTRYPOINT ["dotnet", "watch", "run"]
