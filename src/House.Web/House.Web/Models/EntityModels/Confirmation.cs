using System;

namespace House.Web.Models.EntityModels
{
    public class Confirmation : BaseEntity
    {
        public bool Confirmed { get; private set; }

        public DateTime DateConfirmed { get; private set; }
    }
}
