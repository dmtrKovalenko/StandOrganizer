using StandOrganizer.DAL.Models;
using System;
using System.Linq;

namespace StandOrganizer.DAL.Repository
{
    public interface IRepository<T> where T : BaseEntity
    {
        IQueryable<T> Queryable { get; }

        T GetById(int id);

        T Find(Func<T, Boolean> predicate);
    }
}
