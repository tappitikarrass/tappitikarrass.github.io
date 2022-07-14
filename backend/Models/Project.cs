namespace PersonalWebsiteBackend.Models;

public class Project
{
    public string Name { get; private set; }
    public string Url { get; private set; }

    public Project(string name, string url)
    {
        Name = name;
        Url = url;
    }
}
