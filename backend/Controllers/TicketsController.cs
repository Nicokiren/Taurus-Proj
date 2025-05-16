using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaurusApi_Data;
using TaurusApi_Models;

namespace TaurusApi_Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TicketsController : ControllerBase
    {
        private readonly TaurusContext _context;

        public TicketsController(TaurusContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetAll()
        {
            var tickets = await _context.Tickets
                .Include(t => t.Pessoa)
                .Include(t => t.Servicos)
                .ToListAsync();

            var result = tickets.Select(t => new
            {
                TicketId           = t.Id,
                NomePessoa         = t.Pessoa?.Nome,
                ServicosEscolhidos = new List<string>
                {
                    t.Servicos.Manutencao ? "Manutenção"     : null,
                    t.Servicos.Limpeza     ? "Limpeza"        : null,
                    t.Servicos.TrocaDeOleo ? "Troca de Óleo"  : null,
                    t.Servicos.Orcamento   ? "Orçamento"      : null
                }
                .Where(s => s != null)
                .ToList(),
                Data = t.Servicos.Data.ToString("yyyy-MM-dd"),
                Hora = t.Servicos.Hora.ToString(@"hh\:mm")
            });

            return Ok(result);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<object>> GetById(int id)
        {
            var t = await _context.Tickets
                .Include(x => x.Pessoa)
                .Include(x => x.Servicos)
                .FirstOrDefaultAsync(x => x.Id == id);

            if (t == null) return NotFound();

            var servicosLista = new List<string>();
            if (t.Servicos.Manutencao)  servicosLista.Add("Manutenção");
            if (t.Servicos.Limpeza)     servicosLista.Add("Limpeza");
            if (t.Servicos.TrocaDeOleo) servicosLista.Add("Troca de Óleo");
            if (t.Servicos.Orcamento)   servicosLista.Add("Orçamento");

            return Ok(new
            {
                TicketId   = t.Id,
                NomePessoa = t.Pessoa.Nome,
                Servicos   = servicosLista,
                Data       = t.Servicos.Data.ToString("yyyy-MM-dd"),
                Hora       = t.Servicos.Hora.ToString(@"hh\:mm")
            });
        }

        [HttpPost]
        public async Task<ActionResult<object>> Create([FromBody] TicketRequest req)
        {
            var pessoa  = await _context.Pessoas.FindAsync(req.PessoaId);
            var servico = await _context.Servicos.FindAsync(req.ServicosId);

            if (pessoa == null || servico == null)
                return BadRequest("Pessoa ou Serviço não encontrado.");

            var ticket = new Tickets
            {
                PessoaId   = req.PessoaId,
                ServicosId = req.ServicosId,
                DataHora   = DateTime.Now
            };

            _context.Tickets.Add(ticket);
            await _context.SaveChangesAsync();

            var servicosLista = new List<string>();
            if (servico.Manutencao)  servicosLista.Add("Manutenção");
            if (servico.Limpeza)     servicosLista.Add("Limpeza");
            if (servico.TrocaDeOleo) servicosLista.Add("Troca de Óleo");
            if (servico.Orcamento)   servicosLista.Add("Orçamento");

            var result = new
            {
                TicketId   = ticket.Id,
                NomePessoa = pessoa.Nome,
                Servicos   = servicosLista,
                Data       = servico.Data.ToString("yyyy-MM-dd"),
                Hora       = servico.Hora.ToString(@"hh\:mm")
            };

            return CreatedAtAction(
                nameof(GetById),
                new { id = ticket.Id },
                result
            );
        }
    }
}
