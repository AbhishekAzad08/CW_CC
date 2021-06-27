using eComm.Data.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eComm.BusinessLayer.Services
{
    public interface IProductService
    {
        Task<List<Product>> GetProducts();
        Task<Product> GetProductById(int productId);
        Task<Product> AddProduct(Product product);
        Task<int> UpdateProduct(Product product);
        Task<int> DeleteProduct(int id);
    }
}
