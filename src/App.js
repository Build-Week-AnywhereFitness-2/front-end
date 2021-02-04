import './App.css';
import { Route, Switch, Link } from "react-router-dom"
import PrivateRoute from './utils/PrivateRoute';
import fetchToken from './utils/fetchToken';

import Nav from './components/Nav';

// PAGES (a collection of components that make up one view) //
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Signup from "./components/Signup"
import ClientPage from './components/client/Clientpage';
import TrainerPage from "./components/trainer/Trainerpage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {fetchToken() && // Only displays nav if the user is logged in
          <Nav />
        }
      </header>

      {/* Render the pages here */}
      <div className="view-container">
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/trainerpage" component={TrainerPage}></PrivateRoute>
          <PrivateRoute exact path="/clientpage" component={ClientPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
