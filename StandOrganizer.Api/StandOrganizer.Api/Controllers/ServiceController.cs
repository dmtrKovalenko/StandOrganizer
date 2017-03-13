using StandOrginizer.BL.Interfaces;
using StandOrginizer.BL.ViewModels;
using System.Collections.Generic;
using System.Web.Http;

namespace StandOrganizer.Api.Controllers
{
    public class ServiceController : ApiController
    {
        private readonly IServiceManager serviceManager;

        public ServiceController(IServiceManager serviceManager)
        {
            this.serviceManager = serviceManager;
        }

        public IEnumerable<ServiceViewModel> GetServices()
        {
            var services = this.serviceManager.GetAllServices();

            return services;
        }
    }
}
