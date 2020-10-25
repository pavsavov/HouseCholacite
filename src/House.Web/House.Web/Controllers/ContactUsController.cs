using System.Threading.Tasks;
using House.Web.Models.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace House.Web.Controllers
{
    [ApiController]
    [AllowAnonymous]
    [Route("api/contact-us")] 
    public class ContactUsController : ControllerBase
    {
        //contactUsservice private field
        //Emailservice private field
        public ContactUsController()
        {

        }

        [HttpPost]
        public async Task<IActionResult> ContactUs([FromBody] ContactUsViewModel viewmodel)
        {
            if (!ModelState.IsValid)
            {
             return   RedirectToAction("/", "HomeController");
            }

            //create newCOntact.If success
            //contactUsService.CreateContact()

            //send email to Admin and Customer as confirmation
            //EmailService.SendEmail()

            //save to db incomming data
           return RedirectToAction("/", "HomeController");
        }
    }
}
