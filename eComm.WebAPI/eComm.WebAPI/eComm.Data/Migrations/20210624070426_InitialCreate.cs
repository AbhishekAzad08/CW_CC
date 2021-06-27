using Microsoft.EntityFrameworkCore.Migrations;

namespace eComm.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductId);
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductId", "IsActive", "Name", "Price", "Type" },
                values: new object[,]
                {
                    { 1, true, "Guide to Azure", 20.05m, "Book" },
                    { 2, true, "Time Travel", 10.05m, "Book" },
                    { 3, true, "TV", 520.05m, "Electronics" },
                    { 4, true, "Mobile", 1020.05m, "Electronics" },
                    { 5, true, "Superman", 99.99m, "Toys" },
                    { 6, true, "Cake", 20.05m, "Food" },
                    { 7, true, "Pizza", 10.99m, "Food" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
