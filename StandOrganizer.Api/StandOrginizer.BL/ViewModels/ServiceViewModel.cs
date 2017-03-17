using System;

namespace StandOrginizer.BL.ViewModels
{
    public class ServiceViewModel
    {
        public DateTimeOffset StartDate { get; set; }

        public DateTimeOffset EndDate { get; set; }

        public PublisherViewModel Publisher { get; set; }

        public PublisherViewModel Assistant { get; set; }
    }
}
