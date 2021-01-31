using System.Threading.Tasks;
using House.Web.Models.ViewModels;
using House.Web.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace House.Web.Controllers
{
    [ApiController]
    [AllowAnonymous]
    [Route("api/contact-us")]
    public class ContactUsController : ControllerBase
    {
        private readonly IContactUsService contactUsService;
        private readonly IEmailService emailService;

        //public ContactUsController(IContactUsService contactUsService, IEmailService emailService)
        //{
        //    this.contactUsService = contactUsService;
        //}

        [HttpPost]
        public async Task<IActionResult> ContactUs([FromBody] ContactUsViewModel viewmodel)
        {
            if (!ModelState.IsValid)
            {
                return RedirectToAction("/", "HomeController");
            }

            var createdContactRecord = await this.contactUsService.CreateContactAsync(viewmodel);

            if (createdContactRecord is null)
            {
                return this.Ok(createdContactRecord);
            }
            //create newCOntact.If success
            //contactUsService.CreateContact()

            //send email to Admin and Customer as confirmation


            //return this.CreatedAtRoute("GetBook", new { id = book.Id }, book);?????
            
            //EmailService.SendEmail()

            //save to db incomming data
            return RedirectToAction("/", "HomeController");
        }

        //Add error handling page
    }
}
