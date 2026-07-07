using Microsoft.EntityFrameworkCore;
using Lab2_DbContext.Models;

namespace Lab2_DbContext.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }

        public DbSet<Category> Categories { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                "Server=YOUR_SERVER_NAME;Database=RetailInventoryDB;Trusted_Connection=True;TrustServerCertificate=True;");
        }
    }
}
