﻿using System.ComponentModel.DataAnnotations;

namespace House.Web.Models
{
    public class ContactUsViewModel
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Message { get; set; }
    }
}
