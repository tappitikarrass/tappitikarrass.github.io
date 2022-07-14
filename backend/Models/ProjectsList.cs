namespace PersonalWebsiteBackend.Models;

public class ProjectsList
{
    public List<Project> List { get; private set; }

    public ProjectsList()
    {
        List = new();
        List.Add(new("Project1", "http://1.com"));
        List.Add(new("Project2", "http://2.com"));
        List.Add(new("Project3", "http://3.com"));
        List.Add(new("Project4", "http://4.com"));
        List.Add(new("Project5", "http://5.com"));
        List.Add(new("Project6", "http://6.com"));
        List.Add(new("Project7", "http://7.com"));
        List.Add(new("Project8", "http://8.com"));
        List.Add(new("Project9", "http://9.com"));
        List.Add(new("Project666", "http://666.com"));
    }
}
