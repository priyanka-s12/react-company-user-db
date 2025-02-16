import Header from '../components/Header';
const Statistics = () => (
  <div>
    <Header />
    <main>
      <section className="container py-3">
        <h2>User Statistics</h2>
        <hr />
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h4>Total Number of Users</h4>
                <h5 className="display-5">10</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h4>Paid Users</h4>
                <h5 className="display-5">5</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6mb-3">
            <div className="card">
              <div className="card-body">
                <h4>Most Valuable User</h4>
                <h6 className="display-5">Leanne Graham</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);
export default Statistics;
