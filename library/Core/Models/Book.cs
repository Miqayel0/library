using library.Controllers;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace library.Core.Models
{
    public class Book
    {
        public Book()
        {
            Assignings = new HashSet<Assigning>();
        }

        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(250)]
        public string Title { get; set; }

        [MaxLength(100)]
        public string Location { get; set; }

        public string Description { get; set; }

        [Required]
        public bool IsAvailable { get; set; }

        public ICollection<Assigning> Assignings { get; set; }

    }
}