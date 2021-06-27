using eComm.Data.Interfaces;
using eComm.Data.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace eComm.Data.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ProductContext _productDbContext ;

        public ProductRepository( ProductContext productDbContext )
        {
            _productDbContext = productDbContext;
        }
        public async Task<Product> AddProduct(Product product)
        {
            _productDbContext.Add(product);
            await _productDbContext.SaveChangesAsync();
            return product;
        }

        public async Task<int> DeleteProduct(int id)
        {
            var product = _productDbContext.Products.FirstOrDefault(x => x.ProductId == id);
            if (product == null)
                return 0;
            _productDbContext.Products.Remove(product);
            return await _productDbContext.SaveChangesAsync();
        }
        public async Task<List<Product>> GetProducts()
        {
            return await (from c in _productDbContext.Products                    
                    select c).ToListAsync();
        }

        public async Task<Product> GetProductById(int productId)
        {
            return await (from c in _productDbContext.Products
                    where c.ProductId == productId
                    select c).FirstOrDefaultAsync();
        }

        public async Task<int> UpdateProduct(Product product)
        {
            var selectedProduct = _productDbContext.Products.FirstOrDefault(x => x.ProductId == product.ProductId);
            if (selectedProduct == null)
                return 0;
            selectedProduct.Name = product.Name;
            selectedProduct.Price = product.Price;
            selectedProduct.Type = product.Type;
            selectedProduct.IsActive = product.IsActive;
            return await _productDbContext.SaveChangesAsync();

        }
    }
}
