using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaurusApi_Models
{
    public class Tickets
    {
        [Key]
        public int Id { get; set; }

        public int PessoaId { get; set; }
        
        [ForeignKey("PessoaId")]
        public Pessoas? Pessoa { get; set; }

        public int ServicosId { get; set; }

        [ForeignKey("ServicosId")]
        public Servicos? Servicos { get; set; }

        public DateTime DataHora { get; set; } = DateTime.Now;
    }
}