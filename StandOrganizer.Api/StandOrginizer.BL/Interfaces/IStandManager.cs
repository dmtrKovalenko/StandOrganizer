using StandOrginizer.BL.ViewModels;
using System.Collections.Generic;

namespace StandOrginizer.BL.Interfaces
{
    public interface IStandManager
    {
        IEnumerable<StandViewModel> GetAllServices();
    }
}
