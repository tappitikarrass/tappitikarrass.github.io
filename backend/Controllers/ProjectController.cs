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
    /// Get project by id.
    /// </summary>
    [Route("{id}")]
    [HttpGet]
    public async Task<ActionResult<Project>> GetAsync(long id)
    {
        var store = await InitJsonAsync();

        var projects = store.GetCollection<Project>();

        Project result;

        try
        {
            result = projects.AsQueryable().Where(e => e.Id == id).First();
        }
        catch (InvalidOperationException)
        {
            return NotFound();
        }

        return result;
    }

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

        Project proj1 = new(1, "Project 1", "https://example.com");
        Project proj2 = new(2, "Project 2", "https://example.com");
        Project proj3 = new(3, "Project 3", "https://example.com");
        await projects.InsertManyAsync(new List<Project>() { proj1, proj2, proj3 });

        await store.InsertItemAsync("projects", projects);

        return store;
    }
}
