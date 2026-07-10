using Microsoft.EntityFrameworkCore;

namespace Lab7_LINQQueries.Models
{
    public class AppDbContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }

        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                "Server=YOUR_SERVER_NAME;Database=StoreDb;Trusted_Connection=True;TrustServerCertificate=True");
        }
    }
}
