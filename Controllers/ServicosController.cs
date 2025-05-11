using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaurusApi_Data;
using TaurusApi_Models;

namespace TaurusApi_Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ServicosController : ControllerBase
    {
        private readonly TaurusContext _context;

        public ServicosController(TaurusContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Servicos>>> GetAll()
        {
            return await _context.Servicos.ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Servicos>> GetById(int id)
        {
            var serv = await _context.Servicos.FindAsync(id);
            if (serv == null)
                return NotFound();

            return serv;
        }

        [HttpPost]
        public async Task<ActionResult<Servicos>> Create(Servicos serv)
        {
            _context.Servicos.Add(serv);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = serv.Id }, serv);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update(int id, Servicos updated)
        {
            if (id != updated.Id)
                return BadRequest();

            var existing = await _context.Servicos.FindAsync(id);
            if (existing == null)
                return NotFound();

            existing.Manutencao = updated.Manutencao;
            existing.Limpeza = updated.Limpeza;
            existing.TrocaDeOleo = updated.TrocaDeOleo;
            existing.Orcamento = updated.Orcamento;
            existing.Data = updated.Data;
            existing.Hora = updated.Hora;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var serv = await _context.Servicos.FindAsync(id);
            if (serv == null)
                return NotFound();

            _context.Servicos.Remove(serv);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}