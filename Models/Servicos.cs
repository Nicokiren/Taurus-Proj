using System.ComponentModel.DataAnnotations;

namespace TaurusApi_Models 
{
    public class Servicos
    {
        [Key]
        public int Id { get; set; }

        public bool Manutencao { get; set; } = false; 

        public bool Limpeza { get; set; } = false; 

        public bool TrocaDeOleo { get; set; } = false; 

        public bool Orcamento { get; set; } = false;

        [Required]
        public DateTime Data { get; set; }
        
        [Required]
        public TimeSpan Hora { get; set; }
    }
}