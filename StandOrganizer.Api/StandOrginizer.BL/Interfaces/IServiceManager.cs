using StandOrginizer.BL.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StandOrginizer.BL.Interfaces
{
    public interface IServiceManager
    {
        IEnumerable<ServiceViewModel> GetAllServices();
    }
}
