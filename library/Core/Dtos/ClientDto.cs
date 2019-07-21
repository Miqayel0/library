using library.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace library.Core.Dtos
{
    public class ClientDto
    {

        public int Id { get; set; }


        public string FirstName { get; set; }


        public string SecondName { get; set; }

        public int PhoneNumber { get; set; }

        public string Address { get; set; }

        public ICollection<Book> Books { get; set; }
    }
}