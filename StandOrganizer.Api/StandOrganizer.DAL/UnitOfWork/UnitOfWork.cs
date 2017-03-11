using StandOrganizer.DAL.Models;
using StandOrganizer.DAL.Repository;
using System;
using System.Collections.Generic;

namespace StandOrganizer.DAL.UnitOfWork
{
    public class UnitOfWork : IDisposable, IUnitOfWork
    {
        private readonly ApplicationDBContext context;

        private bool disposed;
        private Dictionary<string, object> repositories;

        public UnitOfWork(ApplicationDBContext context)
        {
            this.context = context;
        }

        public UnitOfWork(string connectionString)
        {
            context = new ApplicationDBContext(connectionString);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            disposed = true;
        }

        public Repository<T> Repository<T>() where T : BaseEntity
        {
            if (repositories == null)
            {
                repositories = new Dictionary<string, object>();
            }

            var type = typeof(T).Name;

            if (!repositories.ContainsKey(type))
            {
                var repositoryInstance = new Repository<T>(this.context);

                repositories.Add(type, repositoryInstance);
            }

            return (Repository<T>)repositories[type];
        }
    }
}