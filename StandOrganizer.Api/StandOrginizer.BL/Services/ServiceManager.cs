using StandOrginizer.BL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StandOrginizer.BL.ViewModels;

namespace StandOrginizer.BL.Services
{
    public class ServiceManager : IServiceManager
    {
        public IEnumerable<ServiceViewModel> GetAllServices()
        {
            return new List<ServiceViewModel>
            {
                new ServiceViewModel ()
                {
                    Id = 1
                },
                new ServiceViewModel ()
                {
                    Id = 2
                }
            };
        }
    }
}
