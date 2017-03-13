using StandOrginizer.BL.Interfaces;
using StandOrginizer.BL.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace StandOrganizer.Api.Controllers
{
    public class StandController : ApiController
    {
        private IServiceManager serviceManager { get; set; }

        public StandController(IServiceManager serviceManager)
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
