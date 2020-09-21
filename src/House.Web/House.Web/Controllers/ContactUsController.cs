using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using House.Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace House.Web.Controllers
{
    [ApiController]
    //[Route("")]
    [Route("contact-us")]
    public class ContactUsController : ControllerBase
    {
        public ContactUsController()
        {

        }

        [HttpPost]
        public string Get([FromBody]ContactUsViewModel viewmodel)
        {
            //save to db incomming data
            return "someone called me";
        }
    }
}
