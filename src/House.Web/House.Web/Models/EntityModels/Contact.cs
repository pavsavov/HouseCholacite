using House.Web.DataAccess;
using System;
using System.Threading.Tasks;

namespace House.Web.Models.EntityModels
{
    public class Contact : BaseEntity
    {
        public string FirstName { get; private set; }

        public string LastName { get; private set; }

        public string Email { get; private set; }

        public string PhoneNumber { get; private set; }

        public string Message { get; private set; }

        public Contact()
        {
        }

        private Contact(string firstName, string lastName, string email, string phoneNumber, string message)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Email = email;
            this.PhoneNumber = phoneNumber;
            this.Message = message;
        }

        public async Task<Contact> CreateAsync(string firstName, string lastName, string email, string phoneNumber, string message, AppDbContext context)
        {
            var contact = new Contact(firstName, lastName, email, phoneNumber, message);

            await context.Contacts.InsertOneAsync(contact);

            return contact;
        }
    }
}
