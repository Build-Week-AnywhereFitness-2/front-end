import './App.css';
import { Route, Switch, Link } from "react-router-dom"
import { PrivateRoute } from './utils/PrivateRoute';
import { useState } from 'react';
import fetchToken from './utils/fetchToken';

import styled from "styled-components";

import ClientPage from './components/client/Clientpage';
import TrainerPage from "./components/trainer/Trainerpage"

// PAGES (a collection of components that make up one view) //
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


export const StyledLinks = styled.div`
  font-family:Helvetica, sans-serif;
    .link {
      text-decoration: none;
      color: lightgrey;
      margin: 1rem; 
      flex-basis: fit-content;
      flex-shrink: 3;
    }
    .App-header {
      background-color: #3D434A;
      min-height: 8vh;
      font-size: calc(10px + 2vmin);
  }
    .menu {
      display: flex;
      margin-right: 10%;
      justify-content: flex-start;
    }
    h1 {
      padding: 1rem;
    }
`;

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  const logout = () => {
    localStorage.removeItem("token")
    setLoginStatus(false);
  };

  return (
    <div className="App">
      {fetchToken() && // Only displays nav if the user is logged in
        <StyledLinks>
          <header className="App-header">
            <div className="ui  menu" >
              <h1>🏋️‍♀️ ANYWHERE FITNESS 🏋️‍♀️</h1>
              <a className="item link">
                <Link className="link" to="/">Dashboard</Link>
              </a>
              <a className="link item">
                <Link className="link" to="/trainerpage">Trainers</Link>
              </a>
              <a className="link item">
                <Link className="link" to="/clientpage">Clients</Link>
              </a>
              <a className="link item">
                <Link className="link" onClick={logout}>Logout</Link>
              </a>
            </div>
          </header>
        </StyledLinks>
      }

      {/* Render the pages here */}
      <div className="view-container">
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/trainerpage" component={TrainerPage} />
          <PrivateRoute exact path="/clientpage" component={ClientPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
