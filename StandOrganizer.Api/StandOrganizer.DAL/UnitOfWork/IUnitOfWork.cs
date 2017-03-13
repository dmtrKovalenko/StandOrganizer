using StandOrganizer.DAL.Models;
using StandOrganizer.DAL.Repository;

namespace StandOrganizer.DAL.UnitOfWork
{
    public interface IUnitOfWork
    {
        void Dispose();

        void Save();

        Repository<T> Repository<T>() where T : BaseEntity;
    }
}
