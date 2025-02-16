import { useParams } from 'react-router';
import Header from '../components/Header';
import useFetch from '../useFetch';
const UserDetails = () => {
  const userId = useParams();
  //   console.log(userId);

  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  const { data, loading, error } = useFetch(apiUrl);
  //   console.log(data);

  const userData = data?.find((user) => user.id == userId.userId);
  //   console.log(userData);

  return (
    <div>
      <Header />
      <main className="container py-3">
        {userData ? (
          <>
            {loading && <p>Loading...</p>}
            <h3>{userData.name}</h3>
            <ul className="list-group mt-3 w-75">
              <li className="list-group-item">
                <strong>Name: </strong>
                {userData.name}
              </li>
              <li className="list-group-item">
                <strong>Username: </strong>
                {userData.username}
              </li>
              <li className="list-group-item">
                <strong>Email: </strong>
                {userData.email}
              </li>
              <li className="list-group-item">
                <strong>Phone: </strong>
                {userData.phone}
              </li>
              <li className="list-group-item">
                <strong>Website: </strong>
                {userData.website}
              </li>
              <li className="list-group-item">
                <strong>Company: </strong>
                {userData.company.name} ({userData.company.catchPhrase})
              </li>
              <li className="list-group-item">
                <strong>City: </strong>
                {userData.address.city}
              </li>
              <li className="list-group-item">
                <strong>Zipcode: </strong>
                {userData.address.zipcode}
              </li>
            </ul>
          </>
        ) : (
          <p>User not found</p>
        )}
      </main>
    </div>
  );
};

export default UserDetails;
