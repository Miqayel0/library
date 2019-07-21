using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace library.Core.Dtos
{
    public class AssignDto
    {
        public IEnumerable<int> BooksId { get; set; }
        public int ClientId { get; set; }

        public DateTime OrderDate { get; set; }

        public DateTime ReturnDate { get; set; }
    }
}