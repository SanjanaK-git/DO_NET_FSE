using Microsoft.EntityFrameworkCore;
using Lab4EFCore.Models;

using var context = new AppDbContext();

// Create Categories
var electronics = new Category
{
    Name = "Electronics"
};

var groceries = new Category
{
    Name = "Groceries"
};

// Add Categories
await context.Categories.AddRangeAsync(electronics, groceries);

// Create Products
var product1 = new Product
{
    Name = "Laptop",
    Price = 75000,
    Category = electronics
};

var product2 = new Product
{
    Name = "Rice Bag",
    Price = 1200,
    Category = groceries
};

// Add Products
await context.Products.AddRangeAsync(product1, product2);

// Save to Database
await context.SaveChangesAsync();

Console.WriteLine("Data inserted successfully.");
