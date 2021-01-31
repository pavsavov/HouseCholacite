using House.Web.DataAccess;
using House.Web.Models.EntityModels;
using House.Web.Models.ViewModels;
using System;
using System.Threading.Tasks;

namespace House.Web.Services
{
    public class ContactUsService : IContactUsService
    {
        //add db private field
        private readonly AppDbContext context;

        public ContactUsService(AppDbContext context)
        {
            this.context = context;
        }


        public async Task<Contact> CreateContactAsync(ContactUsViewModel viewModel)
        {
            var contact = new Contact();

            var result = await contact.CreateAsync(viewModel.FirstName, viewModel.LastName, viewModel.Email, viewModel.PhoneNumber, viewModel.Message, this.context);

            return result;
        }
    }
}
