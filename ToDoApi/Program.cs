using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

var  AllowLocalDevelopmentOrigin = "_allowLocalDevelopmentOrigin";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowLocalDevelopmentOrigin,
                      policy  =>
                      {
                          policy.WithOrigins(
                            "http://localhost:4200",
                            "https://localhost:4200"
                            );
                      });
});

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<TodoContext>(opt => opt.UseInMemoryDatabase("TodoList"));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors(AllowLocalDevelopmentOrigin);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
