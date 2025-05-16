using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaurusApi_Data;
using TaurusApi_Models;

namespace TaurusApi_Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PessoasController : ControllerBase
    {
        private readonly TaurusContext _context;

        public PessoasController(TaurusContext context)
        {   
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pessoas>>> GetAll()
        {
            return await _context.Pessoas.ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Pessoas>> GetById(int id)
        {
            var pessoa = await _context.Pessoas.FindAsync(id);
            if (pessoa == null)
                return NotFound();

            return pessoa;
        }

        [HttpPost]
        public async Task<ActionResult<Pessoas>> Create(Pessoas pessoa)
        {
            _context.Pessoas.Add(pessoa);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = pessoa.Id }, pessoa);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update(int id, Pessoas updated)
        {
            if (id != updated.Id)
                return BadRequest();

            var existing = await _context.Pessoas.FindAsync(id);
            if (existing == null)
                return NotFound();

            existing.Nome = updated.Nome;
            existing.Telefone = updated.Telefone;
            existing.Endereco = updated.Endereco;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var pessoa = await _context.Pessoas.FindAsync(id);
            if (pessoa == null)
                return NotFound();

            _context.Pessoas.Remove(pessoa);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}