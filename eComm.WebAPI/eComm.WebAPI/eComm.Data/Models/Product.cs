using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eComm.Data.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get;set;  }
        public string Name { get; set; }
        public string Type { get; set; }
        [Column(TypeName="decimal(18,2)")]
        public double Price { get; set; }
        public bool IsActive { get; set; }
    }
}
