using eComm.BusinessLayer.Services;
using eComm.Data;
using eComm.Data.Interfaces;
using eComm.Data.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Data;

namespace eComm.WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddNewtonsoftJson();
            services.AddCors(options =>
            {
                options.AddPolicy("EnableCors", builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                    //builder.WithOrigins("http://localhost:4200");
                });
            });
            services.AddOptions();
            services.AddDbContext<ProductContext>(options => options
                .UseSqlServer(Configuration.GetConnectionString("eCommDbConnectionStr"), b => b.MigrationsAssembly("eComm.Data")));

            services.AddScoped<IDbConnection>(b => new SqlConnection(Configuration.GetConnectionString("eCommDbConnectionStr")));
            services.AddSwaggerGen();
            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<IProductService, ProductService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseSwagger();

            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>()?.CreateScope())
            {
                if (serviceScope != null)
                {
                    var context = serviceScope.ServiceProvider.GetRequiredService<ProductContext>();
                    context.Database.Migrate();
                }
            }

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "eComm API V1");
            });

            app.UseRouting();
            app.UseHttpsRedirection();
            app.UseCors("EnableCors");
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
