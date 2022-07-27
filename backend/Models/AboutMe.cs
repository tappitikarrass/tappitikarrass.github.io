using System.ComponentModel.DataAnnotations;

namespace PersonalWebsiteBackend.Controllers;

public class AboutMe
{
    [Key]
    [Required]
    public string Name { get; private set; }
    [EmailAddress]
    [Required]
    public string Email { get; private set; }
    [Required]
    public string Text { get; private set; }

    public AboutMe(string name, string email, string text)
    {
        Name = name;
        Email = email;
        Text = text;
    }
}
