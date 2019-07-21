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
    public class ClientRepository : IClientRepository
    {
        private readonly LibraryContext context;

        public ClientRepository()
        {
            this.context = new LibraryContext();
        }
        public async Task<Client> Create(Client entity)
        {
            context.Clients.Add(entity);
            await context.SaveChangesAsync();

            return entity;
        }

        public async Task Delete(int id)
        {
            var client = await context.Clients.FindAsync(id);
            context.Clients.Remove(client);

            await context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Client>> GetAll()
        {
            return await context.Clients
                .ToListAsync();
        }

        public async Task<IEnumerable<Client>> GetAll(string name)
        {
            return await context.Clients
                .Where(c => c.FirstName.Contains(name))
                .ToListAsync();
        }

        public async Task<Client> GetById(int id)
        {
            return await context.Clients.FindAsync(id);
        }

        public async Task<Client> Update(Client entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            await context.SaveChangesAsync();

            return await context.Clients.FindAsync(entity.Id);
        }
    }
}