import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header />
      <main className="text-center">
        <section className="bg-primary text-light container-fluid py-5">
          <h2 className="display-3">User Database</h2>
          <p>View company's user data</p>
          <Link className="btn btn-light mt-3" to="/users">
            View List of Users
          </Link>
        </section>

        <section className="bg-body-tertiary container-fluid py-5">
          <h2 className="display-4 fw-normal">User Statistics</h2>
          <p>View company's user statistics</p>
          <Link className="btn btn-primary mt-3" to="/statistics">
            View User Stats
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
