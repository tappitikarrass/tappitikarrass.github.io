using System.ComponentModel.DataAnnotations;

namespace PersonalWebsiteBackend.Models;

public enum ProjectType { Github, Url };

public class Project
{
    [Key]
    [Required]
    public long Id { get; private set; }
    [Required]
    public string Name { get; private set; }
    [Url]
    [Required]
    public string Url { get; private set; }
    [EnumDataType(typeof(ProjectType))]
    [Required]
    public ProjectType Type { get; private set; }
    [Required]
    public string[] Tags { get; private set; }

    public Project(long id, string name, string url, ProjectType type, string[] tags)
    {
        Id = id;
        Name = name;
        Url = url;
        Type = type;
        Tags = tags;
    }
}
