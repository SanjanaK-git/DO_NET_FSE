using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Lab4_InsertInitialData.Models
{
    public class Category
    {
        public int CategoryId { get; set; }

        [Required]
        public string Name { get; set; }

        public ICollection<Product> Products { get; set; }
            = new List<Product>();
    }
}
