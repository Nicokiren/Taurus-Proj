using Microsoft.EntityFrameworkCore;
using TaurusApi_Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<TaurusContext>(options =>
    options.UseInMemoryDatabase("TaurusInMemoryDb"));

builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();
app.MapControllers();

app.Run();
