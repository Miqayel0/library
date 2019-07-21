namespace library.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CratingDatabase : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Assignings",
                c => new
                    {
                        ClientId = c.Int(nullable: false),
                        BookId = c.Int(nullable: false),
                        OrderDate = c.DateTime(),
                        ReturnDate = c.DateTime(),
                        WasRetruned = c.DateTime(),
                    })
                .PrimaryKey(t => new { t.ClientId, t.BookId })
                .ForeignKey("dbo.Books", t => t.BookId, cascadeDelete: true)
                .ForeignKey("dbo.Clients", t => t.ClientId, cascadeDelete: true)
                .Index(t => t.ClientId)
                .Index(t => t.BookId);
            
            CreateTable(
                "dbo.Books",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Titel = c.String(nullable: false, maxLength: 250),
                        Location = c.String(maxLength: 100),
                        Description = c.String(),
                        IsAvailable = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Clients",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(nullable: false),
                        SecondName = c.String(nullable: false),
                        PhoneNumber = c.Int(nullable: false),
                        Address = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Assignings", "ClientId", "dbo.Clients");
            DropForeignKey("dbo.Assignings", "BookId", "dbo.Books");
            DropIndex("dbo.Assignings", new[] { "BookId" });
            DropIndex("dbo.Assignings", new[] { "ClientId" });
            DropTable("dbo.Clients");
            DropTable("dbo.Books");
            DropTable("dbo.Assignings");
        }
    }
}
