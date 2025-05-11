using System.ComponentModel.DataAnnotations;

namespace TaurusApi_Models 
{
    public class Pessoas 
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Nome { get; set; }

        [Required]
        [StringLength(15)]
        public string Telefone { get; set; }
        
        [Required]
        [StringLength(200)]
        public string Endereco { get; set; }
    }
}