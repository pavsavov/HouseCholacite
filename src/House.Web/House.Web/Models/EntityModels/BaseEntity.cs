using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace House.Web.Models.EntityModels
{
    public class BaseEntity
    {
        public Guid Id { get; set; }

        public DateTime DateCreated { get; set; }
    }
}
