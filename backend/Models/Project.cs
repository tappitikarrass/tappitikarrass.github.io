namespace PersonalWebsiteBackend.Models;

public class Project
{
    public long Id { get; private set; }
    public string Name { get; private set; }
    public string Url { get; private set; }

    public Project(long id, string name, string url)
    {
        Id = id;
        Name = name;
        Url = url;
    }
}
