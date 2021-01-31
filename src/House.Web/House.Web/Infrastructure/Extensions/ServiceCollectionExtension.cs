using House.Web.DataAccess;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using House.Web.Services;

namespace House.Web.Infrastructure.Extensions
{
    public static class ServiceCollectionExtension
    {
        /// <summary>
        /// Extension method for registration of depenencies.
        /// </summary>
        /// <param name="services"></param>
        /// <param name="Configuration"></param>
        /// <returns></returns>
        public static IServiceCollection AddDependencies(this IServiceCollection services, IConfiguration Configuration)
        {
            //Load configurations from appsettings.json
            services.Configure<AppDbConfiguration>(
                Configuration.GetSection(nameof(AppDbConfiguration)));
           
            //Register Db access dependencies
            services.AddSingleton<IAppDbConfiguration, AppDbConfiguration>();
            //services.AddSingleton(typeof(AppDbContext));

            services.AddTransient<IContactUsService, ContactUsService>();

            return services;
        }
    }
}
