using StandOrginizer.BL.ViewModels;
using System.Collections.Generic;

namespace StandOrginizer.BL.Interfaces
{
    public interface IServiceManager
    {
        IEnumerable<ServiceViewModel> GetAllServices();
    }
}
