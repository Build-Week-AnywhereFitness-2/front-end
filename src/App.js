import './App.css';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';

import Nav from './components/Nav';

// PAGES (a collection of components that make up one view) //
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import fetchToken from './utils/fetchToken';

function App(props) {

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
          <Route exact path="/login" component={Login} />

          <PrivateRoute exact path="/" component={Dashboard} />
        </Switch>
      </div>
    </div>
  );
}


export default App
