using StandOrganizer.DAL.Models;
using System;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;

namespace StandOrganizer.DAL.Repository
{
    public class Repository<T> : IRepository<T> where T : BaseEntity
    {
        private readonly ApplicationDBContext dbConetxt;
        private readonly IDbSet<T> entities;

        public Repository(ApplicationDBContext context)
        {
            this.dbConetxt = context;
            this.entities = dbConetxt.Set<T>();
        }

        public IQueryable<T> Queryable
        {
            get
            {
                return entities;
            }
        }

        T Find(Func<T, bool> predicate)
        {
            var entity = entities.Find(predicate);

            return entity;
        }

        T GetById(int id)
        {
            var entity = entities.First(x => x.Id == id);

            return entity;
        }

        T IRepository<T>.GetById(int id)
        {
            throw new NotImplementedException();
        }

        T IRepository<T>.Find(Func<T, bool> predicate)
        {
            throw new NotImplementedException();
        }
    }
}
