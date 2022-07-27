using Microsoft.AspNetCore.Mvc;
using PersonalWebsiteBackend.Models;
using System.Net.Mime;
using JsonFlatFileDataStore;

namespace PersonalWebsiteBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
[Produces(MediaTypeNames.Application.Json)]
public class AboutMeController : ControllerBase
{
    /// <summary>
    /// Get info about me.
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<AboutMe>> GetAboutMe()
    {
        var store = await InitJsonAsync();

        var aboutMe = store.GetItem<AboutMe>("aboutMe");

        return aboutMe;
    }

    // TODO: Remove this method and provide a better way to obtain store object
    private async Task<DataStore> InitJsonAsync()
    {
        string path = "Store.json";
        if (System.IO.File.Exists(path))
        {
            try
            {
                System.IO.File.Delete(path);
            }
            catch (Exception)
            {
                System.Environment.Exit(1);
            }
        }

        DataStore store = new("Store.json");

        var projects = store.GetCollection<Project>();

        string[] tags1 = new[] { "ts", "react", "mui5", "c#", "aspnetcore" };
        Project proj1 = new(1, "tappitikarrass.github.io", "https://github.com/tappitikarrass/tappitikarrass.github.io", ProjectType.Github, tags1);

        string[] tags2 = new[] { "c#", "telegram-bot", "redis" };
        Project proj2 = new(2, "telegram-queue-bot", "https://github.com/tappitikarrass/telegram-queue-bot", ProjectType.Github, tags2);

        string[] tags3 = new[] { "python", "flask", "postgres", "react" };
        Project proj3 = new(3, "flask-ap", "https://github.com/tappitikarrass/flask-ap", ProjectType.Url, tags3);

        await projects.InsertManyAsync(new List<Project>() { proj1, proj2, proj3 });
        await store.InsertItemAsync("projects", projects);

        await store.InsertItemAsync<AboutMe>("aboutMe", new(
                    "Andrii Lytvyn",
                    "lytvyn.andrii.contact@gmail.com",
                    "I am CS(AI) student at Lviv Polytechnic National University.\n\nI have experience with Python, Flask, Linux and SQL.\n\nI like to work with Docker and Typescript.\n\nI'm currently learning C#, .NET Core, ASP.NET Core, TypeScript and React."));

        return store;
    }
}
