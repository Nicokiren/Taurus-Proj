using Microsoft.EntityFrameworkCore;
using TaurusApi_Data;

var builder = WebApplication.CreateBuilder(args);

// Conexão com o MySQL
builder.Services.AddDbContext<TaurusContext>(options =>
    options.UseMySQL(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
