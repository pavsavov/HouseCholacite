namespace House.Web.DataAccess
{
    public interface IAppDbConfiguration
    {
        string ContactsCollectionName { get; set; }

        string ConnectionString { get; set; }

        string DatabaseName { get; set; }

    }
}
