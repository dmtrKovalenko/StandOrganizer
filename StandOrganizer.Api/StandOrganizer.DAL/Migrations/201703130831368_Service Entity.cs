namespace StandOrganizer.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ServiceEntity : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Services", "StartTime", c => c.DateTimeOffset(nullable: false, precision: 7));
            AddColumn("dbo.Services", "EndTime", c => c.DateTimeOffset(nullable: false, precision: 7));
            AddColumn("dbo.Services", "PublisherName", c => c.String());
            AddColumn("dbo.Services", "PublisherPhone", c => c.String());
            AddColumn("dbo.Services", "AssistantName", c => c.String());
            AddColumn("dbo.Services", "AssistantPhone", c => c.String());
            DropColumn("dbo.Services", "Time");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Services", "Time", c => c.DateTime(nullable: false));
            DropColumn("dbo.Services", "AssistantPhone");
            DropColumn("dbo.Services", "AssistantName");
            DropColumn("dbo.Services", "PublisherPhone");
            DropColumn("dbo.Services", "PublisherName");
            DropColumn("dbo.Services", "EndTime");
            DropColumn("dbo.Services", "StartTime");
        }
    }
}
