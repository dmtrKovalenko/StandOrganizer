using StandOrginizer.BL.Interfaces;
using StandOrginizer.BL.ViewModels;
using System.Collections.Generic;
using System.Web.Http;

namespace StandOrganizer.Api.Controllers
{
    public class StandController : ApiController
    {
        private readonly IStandManager standManager;

        public StandController(IStandManager standManager)
        {
            this.standManager = standManager;
        }

        public IEnumerable<StandViewModel> GetStands()
        {
            var stands = this.standManager.GetAllServices();

            return stands;
        }
    }
}
