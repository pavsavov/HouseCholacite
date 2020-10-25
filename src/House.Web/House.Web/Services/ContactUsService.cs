using House.Web.Models.ViewModels;
using System.Threading.Tasks;

namespace House.Web.Services
{
    public class ContactUsService : IContactUsService
    {
        //add db private field
        public ContactUsService()
        {

        }

        public Task<bool> CreateContact(ContactUsViewModel viewModel)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> GetContactByEmail(string email)
        {
            throw new System.NotImplementedException();
        }
    }
}
