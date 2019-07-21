using library.Controllers;
using library.Core.Repositories;
using library.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace library.Persistence.Repositories
{
    public class AssigningRepository : IAssigningRepository
    {
        private readonly LibraryContext context;

        public AssigningRepository()
        {
            this.context = new LibraryContext();
        }
        public async Task Assign(Assigning assigning)
        {
            context.Assignings.Add(assigning);
            var book = context.Books.Find(assigning.BookId);
            book.IsAvailable = false;

            await context.SaveChangesAsync();
        }

        public async Task<Assigning> GetAssignment(int clientId, int bookId)
        {

            return await context.Assignings.SingleOrDefaultAsync(a => a.ClientId == clientId && a.BookId == bookId);

        }

        public async Task<IEnumerable<Assigning>> GetAssignmentByClientId(int clientId)
        {
            return await context.Assignings.Where(a => a.ClientId == clientId).ToArrayAsync();

        }

        public async Task<IEnumerable<Assigning>> GetAssignmentByClientId(int clientId, string bookTitle)
        {

            return await context.Assignings.Where(a => a.ClientId == clientId && a.Book.Title.Contains(bookTitle)).ToArrayAsync();

        }

        public async Task Unassign(Assigning assigning)
        {
            var book = context.Books.Find(assigning.BookId);
            book.IsAvailable = true;

            context.Entry(assigning).State = EntityState.Deleted;

            await context.SaveChangesAsync();
        }
    }
}