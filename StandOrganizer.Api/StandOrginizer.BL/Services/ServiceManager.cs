using StandOrginizer.BL.Interfaces;
using System.Collections.Generic;
using System.Linq;
using StandOrginizer.BL.ViewModels;
using StandOrganizer.DAL.Repository;
using StandOrganizer.DAL.Models;
using StandOrganizer.DAL.UnitOfWork;

namespace StandOrginizer.BL.Services
{
    public class ServiceManager : IServiceManager
    {
        private readonly IRepository<Service> serviceRepository;

        public ServiceManager(IUnitOfWork db)
        {
            this.serviceRepository = db.Repository<Service>();
        }

        public IEnumerable<ServiceViewModel> GetAllServices()
        {
            var services = this.MapToServiceViewModel(serviceRepository.Queryable);
 
            return services.ToList();
        }

        private IQueryable<ServiceViewModel> MapToServiceViewModel (IQueryable<Service> services)
        {
            var viewModels = services.Select(service =>
                new ServiceViewModel()
                {
                    Assistant = new PublisherViewModel
                    {
                        Name = service.AssistantName,
                        Phone = service.AssistantPhone,
                    },
                    Publisher = new PublisherViewModel
                    {
                        Name = service.PublisherName,
                        Phone = service.PublisherPhone,
                    },
                    StartDate = service.StartTime,
                    EndDate = service.EndTime
                });

            return viewModels;
        }
    }
}
