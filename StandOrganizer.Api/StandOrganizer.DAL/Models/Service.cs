using System;

namespace StandOrganizer.DAL.Models
{
    public class Service : BaseEntity
    {
        public DateTime Time { get; set; }

        //custom props

        public virtual Stand Stand { get; set; }
    }
}
