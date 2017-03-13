using StandOrginizer.BL.Interfaces;
using System.Collections.Generic;
using System.Linq;
using StandOrginizer.BL.ViewModels;
using StandOrganizer.DAL.UnitOfWork;
using StandOrganizer.DAL.Repository;
using StandOrganizer.DAL.Models;

namespace StandOrginizer.BL.Services
{
    public class StandManager : IStandManager
    {
        private readonly IRepository<Stand> serviceRepository;
    
        public StandManager(IUnitOfWork db)
        {
            this.serviceRepository = db.Repository<Stand>();
        }

        public IEnumerable<StandViewModel> GetAllServices()
        {
            var services = serviceRepository.Queryable.Select(x => new StandViewModel { Id = x.Id, Name = x.Name});

            return services;
        }
    }
}
