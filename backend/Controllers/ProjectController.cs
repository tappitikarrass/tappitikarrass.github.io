using Microsoft.AspNetCore.Mvc;
using PersonalWebsiteBackend.Models;

namespace PersonalWebsiteBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class ProjectController : ControllerBase
{
    [HttpGet]
    public ActionResult<Project> Get()
    {
        return new Project("Project 1", "https://example.com");
    }
}
