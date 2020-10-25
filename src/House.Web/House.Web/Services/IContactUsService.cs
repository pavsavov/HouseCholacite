using House.Web.Models.ViewModels;
using System.Threading.Tasks;

namespace House.Web.Services
{
    public interface IContactUsService
    {
        Task<bool> CreateContact(ContactUsViewModel viewModel);

        Task<bool> GetContactByEmail(string email);
    }
}
