using System;

namespace House.Web.Models.EntityModels
{
    public class Confirmation : BaseEntity
    {
        public bool Confirmed { get; set; }

        public DateTime DateOfConfirmation { get; set; }
    }
}
