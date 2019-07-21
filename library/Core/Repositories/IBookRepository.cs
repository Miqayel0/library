using library.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace library.Core.Repositories
{
    public interface IBookRepository : IRepository<Book>
    {
        Task<IEnumerable<Book>> GetAll(string name);
    }
}
