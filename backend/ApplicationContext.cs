using Microsoft.EntityFrameworkCore;
using PersonalWebsiteBackend.Models;

namespace PersonalWebsiteBackend;

public class ApplicationContext : DbContext
{
    public DbSet<Project> Projects { get; set; }
    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
    {
        Database.EnsureCreated();
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql("Host=postgres;Database=app_db;Username=postgres;Password=postgres");
    }
}
