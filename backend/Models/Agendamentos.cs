using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaurusApi_Models
{
    public class Agendamentos 
    {
        [Key]
        public int Id { get; set; }

        public string NumeroTicket { get; set; }

        public DateTime DataCriacao { get; set; } = DateTime.Now;

        [Required]
        public int PessoaId { get; set; }

        [ForeignKey("PessoaId")]
        public virtual Pessoas Cliente { get; set; }

        [Required]
        public int ServicoId { get; set; }

        [ForeignKey("ServicoId")]
        public virtual Servicos ServicosEscolhidos { get; set; }
    }
}