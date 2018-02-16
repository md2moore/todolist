using Microsoft.EntityFrameworkCore;

namespace todolist_backend.Models

{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
            : base(options)
        {
        }

        public DbSet<Todo> TodoList { get; set; }

    }
}