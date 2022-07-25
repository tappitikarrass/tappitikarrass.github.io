using Microsoft.AspNetCore.Mvc;
using PersonalWebsiteBackend.Models;
using System.Net.Mime;

namespace PersonalWebsiteBackend.Controllers;

[ApiController]
[Route("[controller]")]
[Produces(MediaTypeNames.Application.Json)]
public class ProjectController : ControllerBase
{
    [HttpGet]
    public ActionResult<Project> Get()
    {
        return new Project("Project 1", "https://example.com");
    }
}
