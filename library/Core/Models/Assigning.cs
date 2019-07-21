using library.Core.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace library.Controllers
{
    public class Assigning
    {
        [Key, Column(Order = 0)]
        public int ClientId { get; set; }
        [Key, Column(Order = 1)]
        public int BookId { get; set; }

        public DateTime? OrderDate { get; set; }

        public DateTime? ReturnDate { get; set; }

        public DateTime? WasRetruned { get; set; }

        public virtual Client Client { get; set; }
        public virtual Book Book { get; set; }
    }
}