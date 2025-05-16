using Microsoft.EntityFrameworkCore;
using TaurusApi_Models;

namespace TaurusApi_Data
{
    public class TaurusContext : DbContext
    {
        public TaurusContext(DbContextOptions<TaurusContext> options)
            : base(options)
        {
        }

        public DbSet<Pessoas> Pessoas { get; set; }
        public DbSet<Servicos> Servicos { get; set; }
        public DbSet<Tickets> Tickets { get; set; }

    }
}