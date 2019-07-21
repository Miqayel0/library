using library.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace library.Core.Repositories
{
    public interface IAssigningRepository
    {
        Task<Assigning> GetAssignment(int clientId, int bookId);
        Task Assign(Assigning assigning);
        Task Unassign(Assigning assigning);
        Task<IEnumerable<Assigning>> GetAssignmentByClientId(int clientId);
        Task<IEnumerable<Assigning>> GetAssignmentByClientId(int clientId, string bookTitle);
    }
}
