using System.Data.Entity;

namespace StandOrganizer.DAL.Models
{
    public class ApplicationDBContext : DbContext 
    {
        public DbSet<Stand> Stands { get; set; }
        public DbSet<Service> Services { get; set; }

        public ApplicationDBContext(string connectionString) : base(connectionString)
        { }
    }
}
