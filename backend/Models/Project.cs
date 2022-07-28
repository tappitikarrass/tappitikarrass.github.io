using System.ComponentModel.DataAnnotations;

namespace PersonalWebsiteBackend.Models;

public enum ProjectType { Github, Url };

public class Project
{
    [Key]
    [Required]
    public long Id { get; private set; }
    [Required]
    public string UserName { get; private set; }
    [Required]
    public string RepoName { get; private set; }
    [Url]
    [Required]
    public string Url { get; private set; }
    [EnumDataType(typeof(ProjectType))]
    [Required]
    public ProjectType Type { get; private set; }
    [Required]
    public string[] Tags { get; private set; }

    public Project(long id, string userName, string repoName, ProjectType type, string[] tags)
    {
        Id = id;
        UserName = userName;
        RepoName = repoName;
        Url = $"https://github.com/{UserName}/{RepoName}";
        Type = type;
        Tags = tags;
    }
}
