namespace TodoApi.Models;

public class ApiVersion
{
    public int Major { get; set; }
    public int Minor { get; set; }
    public int Revision { get; set; }
    public string? Message { get; set; }
}