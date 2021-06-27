using eComm.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace eComm.Data
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options)
            : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlServer(@"Data Source=.;Initial Catalog=eCommDb;Integrated Security=true");

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            this.SeedProducts(builder);
        }
        private void SeedProducts(ModelBuilder builder)
        {
            builder.Entity<Product>().HasData(
                new Product { ProductId = 1, Name = "Guide to Azure", Price = 20.05, Type = "Book", IsActive = true },
                new Product { ProductId = 2, Name = "Time Travel", Price = 10.05, Type = "Book", IsActive = true },
                new Product { ProductId = 3, Name = "TV", Price = 520.05, Type = "Electronics", IsActive = true },
                new Product { ProductId = 4, Name = "Mobile", Price = 1020.05, Type = "Electronics", IsActive = true },
                new Product { ProductId = 5, Name = "Superman", Price = 99.99, Type = "Toys", IsActive = true },
                new Product { ProductId = 6, Name = "Cake", Price = 20.05, Type = "Food", IsActive = true },
                new Product { ProductId = 7, Name = "Pizza", Price = 10.99, Type = "Food", IsActive = true }
                );
        }
    }
    
}
