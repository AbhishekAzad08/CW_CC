﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using eComm.Data;

namespace eComm.Data.Migrations
{
    [DbContext(typeof(ProductContext))]
    partial class ProductContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.7")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("eComm.Data.Models.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ProductId");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            ProductId = 1,
                            IsActive = true,
                            Name = "Guide to Azure",
                            Price = 20.05m,
                            Type = "Book"
                        },
                        new
                        {
                            ProductId = 2,
                            IsActive = true,
                            Name = "Time Travel",
                            Price = 10.05m,
                            Type = "Book"
                        },
                        new
                        {
                            ProductId = 3,
                            IsActive = true,
                            Name = "TV",
                            Price = 520.05m,
                            Type = "Electronics"
                        },
                        new
                        {
                            ProductId = 4,
                            IsActive = true,
                            Name = "Mobile",
                            Price = 1020.05m,
                            Type = "Electronics"
                        },
                        new
                        {
                            ProductId = 5,
                            IsActive = true,
                            Name = "Superman",
                            Price = 99.99m,
                            Type = "Toy"
                        },
                        new
                        {
                            ProductId = 6,
                            IsActive = true,
                            Name = "Cake",
                            Price = 20.05m,
                            Type = "Food"
                        },
                        new
                        {
                            ProductId = 7,
                            IsActive = true,
                            Name = "Pizza",
                            Price = 10.99m,
                            Type = "Food"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
