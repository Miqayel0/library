namespace library.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class text : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Books", "Title", c => c.String(nullable: false, maxLength: 250));
            DropColumn("dbo.Books", "Titel");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Books", "Titel", c => c.String(nullable: false, maxLength: 250));
            DropColumn("dbo.Books", "Title");
        }
    }
}
