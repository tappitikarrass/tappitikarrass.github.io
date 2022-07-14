using Microsoft.AspNetCore.Mvc;
using PersonalWebsiteBackend.Models;

namespace PersonalWebsiteBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class ProjectController : ControllerBase
{
    [HttpGet("{id}")]
    public ActionResult<Project> Get(int id)
    {
        var list = new ProjectsList();
        if (id < 0 || id > list.List.Count - 1)
        {
            return NotFound();
        }
        return list.List[id];
    }
}
