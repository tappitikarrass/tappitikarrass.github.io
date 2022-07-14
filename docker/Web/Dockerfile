# build
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

WORKDIR /source
COPY backend/. .

RUN dotnet publish -c release -o /app

# final
FROM mcr.microsoft.com/dotnet/aspnet:6.0

WORKDIR /app
COPY --from=build /app .

ENTRYPOINT ["dotnet", "PersonalWebsiteBackend.dll"]
