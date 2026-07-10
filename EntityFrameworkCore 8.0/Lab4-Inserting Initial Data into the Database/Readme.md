# Lab 4 - Insert Initial Data using Entity Framework Core

## Objective

Insert initial data into SQL Server using Entity Framework Core.

## Technologies Used

- C#
- .NET 8
- Entity Framework Core
- SQL Server

## Steps

1. Create Category and Product models.
2. Configure AppDbContext.
3. Add initial data using:
   - AddRangeAsync()
   - SaveChangesAsync()
4. Run the project.

## Run Commands

```bash
dotnet restore
dotnet build
dotnet run
```

## Verify Data

```sql
SELECT * FROM Categories;

SELECT * FROM Products;
```

Expected output:

Categories

- Electronics
- Groceries

Products

- Laptop
- Rice Bag
