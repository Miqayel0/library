using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace library.Core.BindingModels
{
    public class RemoveAssiningBindingModel
    {
        public int ClientId { get; set; }

        public int BookId { get; set; }
    }
}