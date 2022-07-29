using JsonFlatFileDataStore;
using PersonalWebsiteBackend.Models;

namespace PersonalWebsiteBackend.Storage;

public class JsonStorage
{
    private static readonly Lazy<JsonStorage> lazy = new(() => new());
    public static JsonStorage Instance { get { return lazy.Value; } }
    public DataStore Store { get; private set; }
    private const string jsonPath = "Store.json";

    private JsonStorage()
    {
        if (System.IO.File.Exists(jsonPath))
        {
            try
            {
                System.IO.File.Delete(jsonPath);
            }
            catch (Exception)
            {
                System.Environment.Exit(1);
            }
            Store = new(jsonPath);
            InitJson();
        }
        Store = new(jsonPath);
    }

    private void InitJson()
    {
        var projects = Store.GetCollection<Project>();

        string[] tags1 = new[] { "ts", "react", "c#", "aspnetcore" };
        Project proj1 = new(1, "tappitikarrass", "tappitikarrass.github.io", ProjectType.Github, tags1);

        string[] tags2 = new[] { "c#", "telegram-bot", "redis" };
        Project proj2 = new(2, "tappitikarrass", "telegram-queue-bot", ProjectType.Github, tags2);

        string[] tags3 = new[] { "python", "flask", "postgres", "react" };
        Project proj3 = new(3, "tappitikarrass", "flask-ap", ProjectType.Url, tags3);

        projects.InsertMany(new List<Project>() { proj1, proj2, proj3 });
        Store.InsertItem("projects", projects);

        Store.InsertItem<AboutMe>("aboutMe", new(
                    "Andrii Lytvyn",
                    "lytvyn.andrii.contact@gmail.com",
                    "I'm CS/AI student at Lviv Polytechnic National University. I like to learn and work with new exciting technologies. Currently I'm learning .NET, ASP.NET Core, TypeScript and React."));
    }
}
