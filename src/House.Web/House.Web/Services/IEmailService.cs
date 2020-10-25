using House.Web.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace House.Web.Services
{
    interface IEmailService
    {
        Task<bool> SendToAdmin(ContactUsViewModel viewModel);

        Task<bool> ConfirmRecieve(string emailAddress);
    }
}
