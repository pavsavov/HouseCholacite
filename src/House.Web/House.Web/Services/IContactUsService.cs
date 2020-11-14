using House.Web.Models.EntityModels;
using House.Web.Models.ViewModels;
using System.Threading.Tasks;

namespace House.Web.Services
{
    public interface IContactUsService
    {
         Task<Contact> CreateContactAsync(ContactUsViewModel viewModel);
    }
}
