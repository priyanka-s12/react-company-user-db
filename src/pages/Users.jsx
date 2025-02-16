import Header from '../components/Header';
import Footer from '../components/Footer';
import useFetch from '../useFetch';
import { Link } from 'react-router-dom';
const Users = () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  const { data, loading, error } = useFetch(apiUrl);
  //   console.log(data);

  return (
    <div>
      <Header />
      <main>
        <section className="container py-3">
          <h2 className="mb-3">List of Users</h2>
          <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error occured while fetching user data.</p>}
            <ul>
              {data && data.length > 0 && (
                <div>
                  {data.map((user) => (
                    <li key={user.id} className="py-3">
                      <h4>{user.name}</h4>
                      <p>Email: {user.email}</p>
                      <p>Phone: {user.phone}</p>
                      <p>Company: {user.company.name}</p>
                      <Link
                        className="btn btn-primary"
                        to={`/users/${user.id}`}
                      >
                        View Details
                      </Link>
                    </li>
                  ))}
                </div>
              )}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Users;
