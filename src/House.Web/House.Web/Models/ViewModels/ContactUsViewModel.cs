using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace House.Web.Models.ViewModels
{
    public class ContactUsViewModel
    {
        [Required]
        [DisplayName("First name")]
        public string FirstName { get; set; }

        [Required]
        [DisplayName("Last name")]
        public string LastName { get; set; }

        [Required]
        [DisplayName("Phone number")]
        public string PhoneNumber { get; set; }

        [Required]
        [DisplayName("Email")]
        public string Email { get; set; }

        [Required]
        [DisplayName("Message")]
        public string Message { get; set; }
    }
}
