using System;

namespace StandOrganizer.DAL.Models
{
     // Dont use object for assistant and publisher to avoid saving them to separate table. 
    public class Service : BaseEntity
    {
        public DateTimeOffset StartTime { get; set; }

        public DateTimeOffset EndTime { get; set; }

        public string PublisherName { get; set; }

        public string PublisherPhone { get; set; }

        public string AssistantName { get; set; }

        public string AssistantPhone { get; set; }

        public virtual Stand Stand { get; set; }
    }
}
