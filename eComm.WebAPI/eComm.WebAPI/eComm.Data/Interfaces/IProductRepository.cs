using eComm.Data.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eComm.Data.Interfaces
{
    public interface IProductRepository
    {
        Task<List<Product>> GetProducts();
        Task<Product> GetProductById(int productId);
        Task<Product> AddProduct(Product product);
        Task<int> UpdateProduct(Product product);
        Task<int> DeleteProduct(int id);

    }
}
