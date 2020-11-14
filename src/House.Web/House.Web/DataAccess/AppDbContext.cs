using House.Web.Models.EntityModels;
using MongoDB.Bson;
using MongoDB.Driver;

namespace House.Web.DataAccess
{
    public class AppDbContext 
    {
        private readonly IMongoDatabase dbContext;
        private readonly IAppDbConfiguration configuration;
        public AppDbContext(IMongoClient client, IAppDbConfiguration configuration)
        {
            this.configuration = configuration;
            this.dbContext = client.GetDatabase(configuration.DatabaseName);
        }

        public IMongoCollection<Contact> Contacts => this.dbContext.GetCollection<Contact>(configuration.ContactsCollectionName);

    }
}
