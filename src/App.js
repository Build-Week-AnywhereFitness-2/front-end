import './App.css';
import { Route, Switch, Link } from "react-router-dom"
import { PrivateRoute } from './components/PrivateRoute';
import TrainerPage from "./components/trainer/Trainerpage"

function App() {

  const logout =() => {
    localStorage.removeItem("token")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>🏋️‍♀️ ANYWERE FITNESS 🏋️‍♀️</h1>
      </header>
      <Route>
        <div>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/trainerpage">Trainers</Link>
            </li>
            <li>
              <Link to="/client">Clients</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link onClick={logout}>Logout</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/login" component={"login placeholder"} />

            {/* Private Route instead of route? */}
            <Route exact path="/dashboard" component={"dashboard placeholder"} />
            <PrivateRoute exact path="/trainerpage">
              <TrainerPage  />
            </PrivateRoute>
          </Switch>
        </div>
      </Route>
    </div>
  );
}

export default App;
