using eComm.Data.Interfaces;
using eComm.Data.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eComm.BusinessLayer.Services
{
    public class ProductService:IProductService
    {
        private readonly IProductRepository _productRepository;
        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<Product> AddProduct(Product product)
        {
            return await _productRepository.AddProduct(product);
        }

        public async Task<int> DeleteProduct(int id)
        {
            return await _productRepository.DeleteProduct(id);
        }

        public async Task<List<Product>> GetProducts()
        {
            return await _productRepository.GetProducts();
        }

        public async Task<Product> GetProductById(int productId)
        {
            return await _productRepository.GetProductById(productId);
        }

        public async Task<int> UpdateProduct(Product product)
        {
            return await _productRepository.UpdateProduct(product);
        }
    }
}
