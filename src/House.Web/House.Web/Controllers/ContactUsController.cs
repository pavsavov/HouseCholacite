using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using House.Web.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace House.Web.Controllers
{
    [ApiController]
    [AllowAnonymous]
    [Route("contact-us")]
    public class ContactUsController : ControllerBase
    {
        public ContactUsController()
        {

        }

        [HttpPost]
        public async Task<IActionResult> ContactUs([FromBody] ContactUsViewModel viewmodel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            //save to db incomming data
            
        }
    }
}
