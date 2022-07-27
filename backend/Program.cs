namespace PersonalWebsiteBackend;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddCors();
        builder.Services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1",
                    new()
                    {
                        Version = "v1",
                        Title = "Personal Website API",
                        Description = "Simple API for personal website",
                        Contact = new()
                        {
                            Name = "Developer",
                            Url = new("https://tappitikarrass.github.io/"),
                            Email = "lytvyn.andrii.contact@gmail.com"
                        },
                        License = new()
                        {
                            Name = "MIT",
                            Url = new("https://opensource.org/licenses/MIT")
                        },
                    });
        });

        var app = builder.Build();
        app.UseSwagger(c =>
        {
            c.RouteTemplate = "api/swagger/{documentName}/swagger.json";
        });

        if (app.Environment.IsDevelopment())
        {
            app.UseSwaggerUI(c =>
            {
                c.RoutePrefix = "api/swagger";
            });
            app.UseReDoc(c =>
            {
                c.RoutePrefix = "api/redoc";
            });
        }
        else
        {
            app.UseReDoc(c =>
            {
                c.SpecUrl = "api/swagger/v1/swagger.json";
                c.RoutePrefix = String.Empty;
            });
        }

        app.UseHttpsRedirection();
        app.UseCors(c =>
        {
            c.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
        });
        app.UseAuthorization();
        app.MapControllers();

        app.Run();
    }
}
