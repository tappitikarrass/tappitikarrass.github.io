using Microsoft.AspNetCore.Mvc;
using PersonalWebsiteBackend.Models;
using System.Net.Mime;
using JsonFlatFileDataStore;

namespace PersonalWebsiteBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
[Produces(MediaTypeNames.Application.Json)]
public class ProjectController : ControllerBase
{
    /// <summary>
    /// Get projects list.
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Project>>> GetListAsync()
    {
        var store = await InitJsonAsync();

        var projects = store.GetCollection<Project>().AsQueryable();

        return new(projects);
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
        string[] tags2 = new[] { "c#", "telegram-bot", "redis" };
        string[] tags3 = new[] { "python", "flask", "postgres", "react" };
        Project proj1 = new(1, "tappitikarrass", "tappitikarrass.github.io", ProjectType.Github, tags1);
        Project proj2 = new(2, "tappitikarrass", "telegram-queue-bot", ProjectType.Github, tags2);
        Project proj3 = new(3, "tappitikarrass", "flask-ap", ProjectType.Url, tags3);
        await projects.InsertManyAsync(new List<Project>() { proj1, proj2, proj3 });

        await store.InsertItemAsync("projects", projects);

        return store;
    }
}
