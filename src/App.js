import './App.css';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';

import { connect } from 'react-redux';

import Nav from './components/Nav';

import { Center, Spinner } from '@chakra-ui/react';

// PAGES (a collection of components that make up one view) //
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import fetchToken from './utils/fetchToken';
import TrainerPage from "./pages/TrainerPage";
import ClientPage from "./pages/ClientPage"
import EditPage from "./pages/EditPage"


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
        {props.fetching && // Display spinner if we are fetching some data
          <Center paddingY="40px">
            <Spinner />
          </Center>
        }
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/trainerpage" component={TrainerPage} />
          <Route exact path="/clientpage" component={ClientPage} />


          <PrivateRoute exact path="/" component={Dashboard} />
        </Switch>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    fetching: state.fetching
  }
}

//<Route exact path="/editpage" component={EditPage} />
export default connect(mapStateToProps, null)(App)
