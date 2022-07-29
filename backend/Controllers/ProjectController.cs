using Microsoft.AspNetCore.Mvc;
using PersonalWebsiteBackend.Models;
using System.Net.Mime;
using JsonFlatFileDataStore;
using PersonalWebsiteBackend.Storage;

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
    public ActionResult<IEnumerable<Project>> GetListAsync()
    {
        var store = JsonStorage.Instance.Store;

        var projects = store.GetCollection<Project>().AsQueryable();

        return new(projects);
    }
}
