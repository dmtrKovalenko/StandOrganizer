using StandOrginizer.BL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StandOrginizer.BL.ViewModels;
using StandOrganizer.DAL.UnitOfWork;
using StandOrganizer.DAL.Repository;
using StandOrganizer.DAL.Models;

namespace StandOrginizer.BL.Services
{
    public class ServiceManager : IServiceManager
    {
        private readonly IRepository<Stand> serviceRepository;
    
        public ServiceManager(IUnitOfWork db)
        {
            this.serviceRepository = db.Repository<Stand>();
        }

        public IEnumerable<ServiceViewModel> GetAllServices()
        {
            var services = serviceRepository.Queryable.Select(x => new ServiceViewModel { Id = x.Id});

            return services;
        }
    }
}
