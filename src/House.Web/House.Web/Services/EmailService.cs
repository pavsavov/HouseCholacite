using House.Web.Models.ViewModels;
using System.Threading.Tasks;

namespace House.Web.Services
{
    public class EmailService : IEmailService
    {
        //private field for db
        public EmailService()
        {

        }

        public Task<bool> ConfirmReceive(string emailAddress)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> SendToAdmin(ContactUsViewModel viewModel)
        {
            throw new System.NotImplementedException();
        }
    }
}
