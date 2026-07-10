using Microsoft.EntityFrameworkCore;
using Lab6_UpdateDelete.Models;

using var context = new AppDbContext();

// Update Product
var product = await context.Products
    .FirstOrDefaultAsync(p => p.Name == "Laptop");

if (product != null)
{
    product.Price = 70000;

    await context.SaveChangesAsync();

    Console.WriteLine("Product updated successfully.");
}
else
{
    Console.WriteLine("Product not found.");
}

// Delete Product
var toDelete = await context.Products
    .FirstOrDefaultAsync(p => p.Name == "Rice Bag");

if (toDelete != null)
{
    context.Products.Remove(toDelete);

    await context.SaveChangesAsync();

    Console.WriteLine("Product deleted successfully.");
}
else
{
    Console.WriteLine("Product not found.");
}
