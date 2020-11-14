namespace House.Web.DataAccess
{
    public class AppDbConfiguration : IAppDbConfiguration
    {
        public string ContactsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
