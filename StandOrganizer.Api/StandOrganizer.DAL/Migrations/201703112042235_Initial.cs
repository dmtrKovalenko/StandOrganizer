namespace StandOrganizer.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Services",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Time = c.DateTime(nullable: false),
                        Stand_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Stands", t => t.Stand_Id)
                .Index(t => t.Stand_Id);
            
            CreateTable(
                "dbo.Stands",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Services", "Stand_Id", "dbo.Stands");
            DropIndex("dbo.Services", new[] { "Stand_Id" });
            DropTable("dbo.Stands");
            DropTable("dbo.Services");
        }
    }
}
