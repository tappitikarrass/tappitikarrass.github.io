using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;
using PersonalWebsiteBackend.Storage;
using PersonalWebsiteBackend.Models;

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
    public ActionResult<AboutMe> GetAboutMe()
    {
        var store = JsonStorage.Instance.Store;
        var aboutMe = store.GetItem<AboutMe>("aboutMe");

        return aboutMe;
    }
}
