using StandOrganizer.DAL.Models;
using System.Data.Entity.Infrastructure;

namespace StandOrganizer.DAL.EF
{
    public class MyContextFactory : IDbContextFactory<ApplicationDBContext>
    {
        public ApplicationDBContext Create()
        {
            return new ApplicationDBContext("DefaultConnection");
        }
    }
}
