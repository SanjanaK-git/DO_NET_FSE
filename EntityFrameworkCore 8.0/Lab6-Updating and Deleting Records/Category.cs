using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Lab6_UpdateDelete.Models
{
    public class Category
    {
        public int CategoryId { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        public ICollection<Product> Products { get; set; } = new List<Product>();
    }
}
