using library.Core.Models;
using library.Core.Repositories;
using library.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace library.Persistence.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly LibraryContext context;

        public BookRepository()
        {
            this.context = new LibraryContext();
        }
        public async Task<Book> Create(Book entity)
        {
            entity.IsAvailable = true;
            context.Books.Add(entity);
            await context.SaveChangesAsync();

            return entity;
        }

        public async Task Delete(int id)
        {
            var book = await context.Books.FindAsync(id);
            context.Books.Remove(book);

            await context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Book>> GetAll()
        {

            return await context.Books.ToListAsync();
        }

        public async Task<IEnumerable<Book>> GetAll(string name)
        {
            return await context.Books.Where(b => b.Title.Contains(name)).ToListAsync();
        }

        public async Task<Book> GetById(int id)
        {
            return await context.Books.FindAsync(id);
        }


        public async Task<Book> Update(Book entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            await context.SaveChangesAsync();

            return await context.Books.FindAsync(entity.Id);
        }
    }
}