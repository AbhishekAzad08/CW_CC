using Xunit;
using Moq;
using eComm.Data.Interfaces;
using eComm.BusinessLayer.Services;
using eComm.Data.Models;
using System.Threading.Tasks;

namespace eComm.BusinessLayer.Tests
{
    public class ProductServiceTests
    {
      
        /// <summary>
        /// Test Add Product with valid input
        /// </summary>
        [Fact]
        public async Task Add_Test_ValidData_SUCCESS()
        {
            var productRepoMoq = new Mock<IProductRepository>();
            var productService = new ProductService(productRepoMoq.Object);

            productRepoMoq.Setup(x => x.AddProduct(It.IsAny<Product>())).ReturnsAsync(new Product { ProductId= 1,Name="ABC",Price=20.0,Type="Food",IsActive=true});

            var result = await productService.AddProduct(new Product {  Name = "ABC", Price = 20.0, Type = "Food", IsActive = true });

            Assert.Equal(1, result.ProductId);
        }

        /// <summary>
        /// Test Update Product with valid input
        /// </summary>
        [Fact]
        public async Task Update_Test_ValidData_SUCCESS()
        {
            var productRepoMoq = new Mock<IProductRepository>();
            var productService = new ProductService(productRepoMoq.Object);

            productRepoMoq.Setup(x => x.UpdateProduct(It.IsAny<Product>())).ReturnsAsync(1);

            var result = await productService.UpdateProduct(new Product { ProductId=1, Name = "ABC", Price = 20.0, Type = "Food", IsActive = true });

            Assert.Equal(1, result);
        }

        /// <summary>
        /// Test Delete Product with valid input
        /// </summary>
        [Fact]
        public async Task Delete_Test_ValidData_SUCCESS()
        {
            var productRepoMoq = new Mock<IProductRepository>();
            var productService = new ProductService(productRepoMoq.Object);

            productRepoMoq.Setup(x => x.DeleteProduct(It.IsAny<int>())).ReturnsAsync(1);

            var result = await productService.DeleteProduct(1);

            Assert.Equal(1, result);
        }
    }
}
